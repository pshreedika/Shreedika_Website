'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  const links = [
    { href: '/blog', label: 'All Posts' },
    { href: '/category/essays', label: 'Essays' },
    { href: '/category/media-review', label: 'Media Review' },
  ]

  return (
    <nav className="flex gap-6">
      {links.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className={`text-sm font-medium hover:text-gray-600 transition-colors ${
            pathname === link.href ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500'
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
