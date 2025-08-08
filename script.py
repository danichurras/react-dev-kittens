import os
import sys
from tqdm import tqdm

pasta = 'public/images'

if not os.path.exists(pasta):
    print(f"A pasta '{pasta}' não existe.")
    sys.exit(1)

arquivos = [f for f in os.listdir(pasta) if f.lower().endswith('.jpg')]

if not arquivos:
    print(f"A pasta '{pasta}' não contém arquivos .jpg.")
    sys.exit(1)

arquivos.sort()

for i, arquivo in enumerate(tqdm(arquivos, desc="renomeando arquivos"), start=1):
    caminho_antigo = os.path.join(pasta, arquivo)
    caminho_temp = os.path.join(pasta, f"temp_{i}.jpg")
    caminho_novo = os.path.join(pasta, f"{i}.jpg")

    try:
        os.rename(caminho_antigo, caminho_temp)
    except Exception as e:
        tqdm.write(f"Erro ao renomear {arquivo} para temp_{i}.jpg: {e}")
        continue

for i in range(1, len(arquivos) + 1):
    caminho_temp = os.path.join(pasta, f"temp_{i}.jpg")
    caminho_novo = os.path.join(pasta, f"{i}.jpg")

    try:
        os.rename(caminho_temp, caminho_novo)
    except Exception as e:
        tqdm.write(f"Erro ao renomear temp_{i}.jpg para {i}.jpg: {e}")
        continue
    
print(f"Renomeados {len(arquivos)} arquivos.")
