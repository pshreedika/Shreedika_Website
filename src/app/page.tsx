import Link from 'next/link'
import { getAllPosts } from '@/lib/markdown'
import PostCard from '@/components/blog/PostCard'

export default function HomePage() {
  const posts = getAllPosts().slice(0, 5)

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <section className="mb-16 text-center">
        <h1 className="text-5xl font-bold font-serif mb-4">
          Welcome to My Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Weekly essays and media reviews exploring ideas, culture, and creativity.
        </p>
      </section>

      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold font-serif">Recent Posts</h2>
          {posts.length > 0 && (
            <Link
              href="/blog"
              className="text-blue-600 hover:underline font-medium"
            >
              View all →
            </Link>
          )}
        </div>

        <div>
          {posts.length > 0 ? (
            posts.map(post => (
              <PostCard key={post.slug} post={post} />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-4">
                No posts yet. Stay tuned for weekly essays and media reviews!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
