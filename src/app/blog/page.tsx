import { getAllPosts } from '@/lib/markdown'
import PostCard from '@/components/blog/PostCard'

export const metadata = {
  title: 'All Posts',
  description: 'Browse all blog posts',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold font-serif mb-4">All Posts</h1>
        <p className="text-gray-600">
          {posts.length} {posts.length === 1 ? 'post' : 'posts'} published
        </p>
      </header>

      <div>
        {posts.length > 0 ? (
          posts.map(post => (
            <PostCard key={post.slug} post={post} />
          ))
        ) : (
          <p className="text-gray-500 text-center py-12">
            No posts yet. Stay tuned!
          </p>
        )}
      </div>
    </div>
  )
}
