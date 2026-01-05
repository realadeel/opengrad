import '../app.css'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-4 py-16 w-full">
        {children}
      </main>
      <Footer />
    </div>
  )
}
