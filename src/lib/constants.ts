export const SITE_METADATA = {
  title: "Shreedika's Blog",
  description: 'Weekly essays and media reviews exploring ideas, culture, and creativity',
  author: 'Shreedika',
  siteUrl: 'https://shreedika.vercel.app',
  socialLinks: {
    twitter: '',
    github: 'https://github.com/pshreedika',
  },
}

export const CATEGORIES = {
  'media-review': 'Media Review',
  'essays': 'Essays',
} as const

export type CategorySlug = keyof typeof CATEGORIES
