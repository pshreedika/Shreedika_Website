import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { Post, PostFrontmatter } from '@/types/post'

const postsDirectory = path.join(process.cwd(), 'content', 'posts')

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      frontmatter: data as PostFrontmatter,
      content,
      readingTime: readingTime(content).text,
    }
  } catch {
    return null
  }
}

export function getAllPosts(): Post[] {
  // Create posts directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true })
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '')
      return getPostBySlug(slug)
    })
    .filter((post): post is Post => post !== null)
    .sort((a, b) => {
      return new Date(b.frontmatter.date).getTime() -
             new Date(a.frontmatter.date).getTime()
    })

  return posts
}

export function getPostsByCategory(category: string): Post[] {
  const allPosts = getAllPosts()
  return allPosts.filter(post =>
    post.frontmatter.category.toLowerCase().replace(' ', '-') === category
  )
}

export function getAllCategories(): string[] {
  const posts = getAllPosts()
  const categories = new Set(
    posts.map(post => post.frontmatter.category)
  )
  return Array.from(categories)
}
