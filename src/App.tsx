import { useState } from "react"
import { Container } from "./components/Container"
import { Header } from "./components/Header"
import { KittenForm } from "./components/KittenForm"
import { KittenList } from "./components/KittenList"
import { PageWrapper } from "./components/PageWrapper"
import { Search } from "./components/Search"
import { Shortlist } from "./components/Shortlist"

import { kittens } from "./data/kittens"

function App() {
  return (
    <PageWrapper>
      <Container>
        <Header />
        <Main />
      </Container>
    </PageWrapper>
  )
}

function Main() {
  const [likedKittens, setLikedKittens] = useState<number[]>([1, 3])

  return (
    <main>
      {/* Search & Shortlist */}
      <div className="mt-24 grid gap-8 sm:grid-cols-2">
        {/* Search */}
        <Search />

        {/* Shortlist */}
        <Shortlist liked={likedKittens} setLiked={setLikedKittens} kittens={kittens} />
      </div>
      {/* Kitten list */}
      <KittenList kittens={kittens} liked={likedKittens} setLiked={setLikedKittens} />
      {/* New Kitten form */}
      <KittenForm />
    </main>
  )
}

export { App }
