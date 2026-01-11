export interface PostFrontmatter {
  title: string
  date: string
  excerpt: string
  category: 'Media Review' | 'Essays'
  tags?: string[]
  author?: string
  featured?: boolean
  coverImage?: string
}

export interface Post {
  slug: string
  frontmatter: PostFrontmatter
  content: string
  readingTime: string
}
