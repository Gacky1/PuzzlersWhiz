import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  ogType?: string
  noIndex?: boolean
}

const BASE_URL = 'https://puzzlerswhiz.com'
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`

export function useSEO({
  title,
  description,
  canonical = BASE_URL,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noIndex = false,
}: SEOProps) {
  useEffect(() => {
    // Title
    document.title = title

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        const parts = selector.match(/\[([^\]]+)="([^\]]+)"\]/)
        if (parts) el.setAttribute(parts[1], parts[2])
        document.head.appendChild(el)
      }
      el.setAttribute(attr, value)
    }

    const setLink = (selector: string, rel: string, href: string) => {
      let el = document.querySelector(selector) as HTMLLinkElement | null
      if (!el) {
        el = document.createElement('link')
        el.setAttribute('rel', rel)
        document.head.appendChild(el)
      }
      el.setAttribute('href', href)
    }

    // Standard meta
    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[name="robots"]', 'content', noIndex ? 'noindex,nofollow' : 'index,follow')

    // Canonical
    setLink('link[rel="canonical"]', 'canonical', canonical)

    // Open Graph
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', canonical)
    setMeta('meta[property="og:image"]', 'content', ogImage)
    setMeta('meta[property="og:type"]', 'content', ogType)

    // Twitter Card
    setMeta('meta[name="twitter:title"]', 'content', title)
    setMeta('meta[name="twitter:description"]', 'content', description)
    setMeta('meta[name="twitter:image"]', 'content', ogImage)

    // JSON-LD — update if already exists
    const existingLd = document.getElementById('ld-json-page')
    if (existingLd) existingLd.remove()
    const script = document.createElement('script')
    script.id = 'ld-json-page'
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': ogType === 'article' ? 'Article' : 'WebPage',
      name: title,
      description,
      url: canonical,
      image: ogImage,
      isPartOf: { '@type': 'WebSite', name: 'PuzzlersWhiz', url: BASE_URL },
    })
    document.head.appendChild(script)

    return () => {
      // Restore defaults when component unmounts
      document.title = 'PuzzlersWhiz – Learn. Practice. Master.'
    }
  }, [title, description, canonical, ogImage, ogType, noIndex])
}
