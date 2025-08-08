import { type Kitten } from "../types";

export function KittenList({ kittens }: { kittens: Kitten[] }) {
  return (
    <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {
        kittens.map((kitten) => (
          <li key={kitten.id} className="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5">
            <img
              className="h-100 w-full object-cover"
              alt={kitten.name}
              src={kitten.imagePath}
            />
            <div className="gap flex items-center justify-between p-4 text-sm">
              <div className="flex items-center gap-2">
                <p className="font-semibold">{kitten.name}</p>
                <span className="text-slate-300">·</span>
                <p className="text-slate-500">{kitten.trait}</p>
              </div>
              <button className="group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={
                    kitten.liked
                    ? "heart fill-pink-500 stroke-none"
                    : "heart stroke-slate-200 group-hover:stroke-slate-300"
                  }
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </button>
            </div>
          </li>
        ))
      }
    </ul>
  )
}
