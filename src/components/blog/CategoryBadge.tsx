import Link from 'next/link'

interface CategoryBadgeProps {
  category: string
}

export default function CategoryBadge({ category }: CategoryBadgeProps) {
  const slug = category.toLowerCase().replace(' ', '-')

  return (
    <Link
      href={`/category/${slug}`}
      className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
    >
      {category}
    </Link>
  )
}
