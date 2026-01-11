import Link from 'next/link'
import { format } from 'date-fns'
import { Post } from '@/types/post'
import CategoryBadge from './CategoryBadge'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="border-b border-gray-200 pb-8 mb-8 last:border-0">
      <Link href={`/blog/${post.slug}`} className="group">
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <time dateTime={post.frontmatter.date}>
              {format(new Date(post.frontmatter.date), 'MMMM d, yyyy')}
            </time>
            <span>·</span>
            <span>{post.readingTime}</span>
            <CategoryBadge category={post.frontmatter.category} />
          </div>

          <h2 className="text-2xl font-bold font-serif group-hover:text-gray-600 transition-colors">
            {post.frontmatter.title}
          </h2>

          <p className="text-gray-600 leading-relaxed">
            {post.frontmatter.excerpt}
          </p>

          <div className="text-blue-600 font-medium text-sm group-hover:underline">
            Read more →
          </div>
        </div>
      </Link>
    </article>
  )
}
