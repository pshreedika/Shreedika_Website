import { notFound } from 'next/navigation'
import { getPostsByCategory } from '@/lib/markdown'
import { CATEGORIES, CategorySlug } from '@/lib/constants'
import PostCard from '@/components/blog/PostCard'

export async function generateStaticParams() {
  return Object.keys(CATEGORIES).map(category => ({
    category,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const categoryName = CATEGORIES[category as CategorySlug]

  if (!categoryName) {
    return { title: 'Category Not Found' }
  }

  return {
    title: categoryName,
    description: `All posts in ${categoryName}`,
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const categoryName = CATEGORIES[category as CategorySlug]

  if (!categoryName) {
    notFound()
  }

  const posts = getPostsByCategory(category)

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold font-serif mb-4">{categoryName}</h1>
        <p className="text-gray-600">
          {posts.length} {posts.length === 1 ? 'post' : 'posts'} in this category
        </p>
      </header>

      <div>
        {posts.length > 0 ? (
          posts.map(post => (
            <PostCard key={post.slug} post={post} />
          ))
        ) : (
          <p className="text-gray-500 text-center py-12">
            No posts in this category yet.
          </p>
        )}
      </div>
    </div>
  )
}
