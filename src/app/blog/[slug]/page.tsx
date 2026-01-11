import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import { getAllPosts, getPostBySlug } from '@/lib/markdown'
import PostContent from '@/components/blog/PostContent'
import CategoryBadge from '@/components/blog/CategoryBadge'
import Link from 'next/link'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(post => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      type: 'article',
      publishedTime: post.frontmatter.date,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <header className="mb-12 text-center">
        <div className="flex items-center justify-center gap-3 text-sm text-gray-600 mb-4">
          <time dateTime={post.frontmatter.date}>
            {format(new Date(post.frontmatter.date), 'MMMM d, yyyy')}
          </time>
          <span>·</span>
          <span>{post.readingTime}</span>
          <CategoryBadge category={post.frontmatter.category} />
        </div>

        <h1 className="text-5xl font-bold font-serif mb-4">
          {post.frontmatter.title}
        </h1>

        <p className="text-xl text-gray-600">
          {post.frontmatter.excerpt}
        </p>
      </header>

      <PostContent content={post.content} />

      <footer className="mt-16 pt-8 border-t border-gray-200">
        <Link
          href="/blog"
          className="text-blue-600 hover:underline font-medium"
        >
          ← Back to all posts
        </Link>
      </footer>
    </article>
  )
}
