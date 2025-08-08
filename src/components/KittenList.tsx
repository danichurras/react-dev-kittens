import { useState, type Dispatch, type SetStateAction } from "react";
import { type Kitten } from "../types";
import { Heart } from "lucide-react";

export function KittenList({
  kittens,
  liked,
  setLiked
}: {
  kittens: Kitten[],
  liked: number[],
  setLiked: Dispatch<SetStateAction<number[]>>
}) {
  return (
    <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {
        kittens.map((kitten) => (
          <li key={kitten.id} className="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5">
            <img
              className="h-100 w-full object-cover"
              alt={kitten.name}
              src={import.meta.env.BASE_URL + kitten.imagePath}
            />
            <div className="gap flex items-center justify-between p-4 text-sm">
              <div className="flex items-center gap-2">
                <p className="font-semibold">{kitten.name}</p>
                <span className="text-slate-300">·</span>
                <p className="text-slate-500">{kitten.trait}</p>
              </div>
              <LikeButton kitten={kitten} liked={liked} setLiked={setLiked} />
            </div>
          </li>
        ))
      }
    </ul>
  )
}

function LikeButton({
  kitten,
  liked,
  setLiked
}: {
    kitten: Kitten,
    liked: number[],
    setLiked: Dispatch<SetStateAction<number[]>>
  }) {
  const [count, setCount] = useState(liked.includes(kitten.id) ? 1 : 0)

  function toggleLike() {
    if (liked.includes(kitten.id)) {
      setLiked(liked.filter(id => id !== kitten.id))
      setCount(count - 1)
    } else {
      setLiked([...liked, kitten.id])
      setCount(count + 1)
    }
  }

  return(
    <button className="group" onClick={toggleLike}>
      <Heart  
        className={
          liked.includes(kitten.id)
            ? "heart fill-pink-500 stroke-none"
            : "heart stroke-slate-200 group-hover:stroke-slate-300"
        } />
      <span className={
        liked.includes(kitten.id)
          ? "text-pink-500"
          : "text-slate-400 group-hover:text-slate-500"
      }>{count}</span>
    </button>
  )
}
