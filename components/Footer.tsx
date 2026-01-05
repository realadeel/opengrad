export function Footer() {
  return (
    <footer className="border-t-2 border-black mt-20">
      <div className="max-w-4xl mx-auto px-4 py-8 font-mono text-xs">
        <div className="flex flex-wrap justify-between gap-4">
          <div>
            <p className="uppercase tracking-wider font-medium">OpenGrad</p>
            <p className="mt-1 text-gray-600">Rigorous, AI-facilitated graduate programs.</p>
          </div>
          <div className="text-right">
            <p>Adeel Ahmad</p>
            <a href="mailto:adeel.rb@gmail.com" className="hover:bg-black hover:text-white">adeel.rb@gmail.com</a>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-gray-300 flex gap-6 text-gray-600">
          <a href="https://github.com/realadeel/opengrad" className="hover:text-black">GitHub</a>
          <a href="https://creativecommons.org/licenses/by-sa/4.0/" className="hover:text-black">CC BY-SA 4.0</a>
        </div>
      </div>
    </footer>
  )
}
