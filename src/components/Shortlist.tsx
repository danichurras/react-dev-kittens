import { Heart, X } from "lucide-react";
import type { Kitten } from "../types";
import type { Dispatch, SetStateAction } from "react";

export function Shortlist({
  kittens,
  liked,
  setLiked
} : {
    kittens: Kitten[],
    liked: number[],
    setLiked: Dispatch<SetStateAction<number[]>>
  }) {
  return (
    <div>
      <h2 className="flex items-center gap-2 font-medium">
        <span>Your shortlist</span>
        <Heart className="fill-pink-500 stroke-none" />
      </h2>
      <ul className="mt-4 flex flex-wrap gap-4">
        {liked.map((id) => {
          const kitten = kittens.find(k => k.id === id);
          if (!kitten) return null;
          return (
            <ShortListCard key={kitten.id} kitten={kitten} setLiked={setLiked} />
          );
        })}
        {liked.length === 0 && (
          <p className="text-slate-500">No kittens shortlisted yet.</p>
        )}
      </ul>
    </div>
  )
}

function ShortListCard({ kitten, setLiked }: { kitten: Kitten, setLiked: Dispatch<SetStateAction<number[]>> }) {
  function handleRemove() {
    setLiked((prev) => prev.filter(id => id !== kitten.id));
  }

  return (
    <li className="relative flex items-center overflow-clip rounded-md bg-white shadow-sm ring ring-black/5 transition duration-100 starting:scale-0 starting:opacity-0">
      <img
        height={32}
        width={32}
        alt={kitten.name}
        className="aspect-square w-8 object-cover"
        src={import.meta.env.BASE_URL + `/images/${kitten.id}.jpg`}
      />
      <p className="px-3 text-sm text-slate-800">{kitten.name}</p>
      <button className="group h-full border-l border-slate-100 px-2 hover:bg-slate-100" onClick={handleRemove}>
        <X className="size-4 stroke-slate-400 group-hover:stroke-red-400" />
      </button>
    </li>
  )
}
