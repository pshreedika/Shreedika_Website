import { SITE_METADATA } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-16">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} {SITE_METADATA.author}</p>
          <p className="mt-2">
            Built with Next.js · Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  )
}
