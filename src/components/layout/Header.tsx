import Link from 'next/link'
import Navigation from './Navigation'

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold font-serif hover:text-gray-600 transition-colors"
          >
            Shreedika
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  )
}
