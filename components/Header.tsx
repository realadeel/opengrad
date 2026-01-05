export function Header() {
  return (
    <header className="border-b-2 border-black">
      <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-sm font-mono font-medium tracking-wide uppercase bg-black text-white px-2 py-1 -ml-2 hover:bg-gray-800">OpenGrad</a>
        <nav>
          <a href="/#programs" className="text-xs font-mono uppercase tracking-wider hover:bg-black hover:text-white px-2 py-1">Programs</a>
        </nav>
      </div>
    </header>
  )
}
