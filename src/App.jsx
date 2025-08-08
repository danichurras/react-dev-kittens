function App() {
  return (
    <main className="min-h-dvh bg-gradient-to-b from-cyan-200 to-white to-[60vh]">
      <div className="mx-auto max-w-5xl p-4 md:p-8">
        <header>
          <a href="/" className="group">
            <div className="inline-flex items-center gap-4">
              <img src="/images/logo.jpg" alt="DevKitten" className="h-16 transition group-hover:scale-105 group-hover:-rotate-6 md:h-20 lg:h-24" />
              <p className="text-lg font-semibold">Dev Kittens</p>
            </div>
          </a>

          <div className="mt-6">
            <h1 className="text-lg font-bold">We&apos;ve got the best kittens</h1>
            <p className="text-slate-600">
              Don&apos;t take our word - let the pictures do the talking!
            </p>
          </div>
        </header>
      </div>
    </main>
  )
}


export { App }
