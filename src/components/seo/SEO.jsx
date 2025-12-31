import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from '@/i18n/TranslationContext'

// Get Google Analytics ID from environment variable
const GA_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_ID || ''
const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://qr2code.fr'

// Initialize Google Analytics only if ID is provided
if (typeof window !== 'undefined' && GA_ID) {
  window.dataLayer = window.dataLayer || []
  function gtag(...args) {
    window.dataLayer.push(args)
  }
  
  if (!window.gtag) {
    window.gtag = gtag
    gtag('js', new Date())
    gtag('config', GA_ID, {
      page_path: window.location.pathname,
      anonymize_ip: true, // Privacy: anonymize IP addresses
      allow_google_signals: false, // Disable Google signals
      allow_ad_personalization_signals: false, // Disable ad personalization
    })

    // Load GA script with integrity check
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    script.crossOrigin = 'anonymous'
    document.head.appendChild(script)
  }
}

export default function SEO({ title, description, keywords, image, type = 'website' }) {
  const { language } = useTranslation()
  const location = useLocation()
  const currentUrl = `${SITE_URL}${location.pathname}`

  // Default SEO values
  const defaultTitle = language === 'en' 
    ? 'Qr2Code - Free Online QR Code Generator'
    : 'Qr2Code - Générateur de QR Code Gratuit en Ligne'
  
  const defaultDescription = language === 'en'
    ? 'Free online QR code generator - Create custom QR codes with logo, colors, and multiple formats. No registration required. Generate QR codes instantly for websites, Wi-Fi, contact info, and more. Download in PNG, SVG, PDF, JPEG, WebP formats.'
    : 'Créez des codes QR uniques et stylisés en quelques clics. Personnalisez les couleurs, ajoutez votre logo et téléchargez aux formats PNG, SVG et PDF. Gratuit, rapide et sans inscription.'

  const defaultKeywords = language === 'en'
    ? 'QR code generator, free QR code generator, online QR code generator, create QR code, QR code maker, custom QR code, QR code with logo, QR code generator free, QR code creator, generate QR code, QR code online, QR code tool, QR code generator no sign up, QR code maker online, free QR code, QR code designer, QR code generator custom colors, QR code download PNG SVG PDF, QR code generator instant, QR code for website, QR code for Wi-Fi, QR code for contact'
    : 'QR code, générateur QR code, créer QR code, QR code gratuit, QR code en ligne, générateur de code QR, QR code personnalisé, QR code avec logo'

  const seoTitle = title || defaultTitle
  const seoDescription = description || defaultDescription
  const seoKeywords = keywords || defaultKeywords
  const seoImage = image || 'https://qr2code.fr/og-image.png'

  useEffect(() => {
    // Update document title
    document.title = seoTitle

    // Update meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`
      let meta = document.querySelector(selector)
      if (!meta) {
        meta = document.createElement('meta')
        if (isProperty) {
          meta.setAttribute('property', name)
        } else {
          meta.setAttribute('name', name)
        }
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }

    // Basic SEO
    updateMetaTag('description', seoDescription)
    updateMetaTag('keywords', seoKeywords)
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
    
    // Open Graph
    updateMetaTag('og:title', seoTitle, true)
    updateMetaTag('og:description', seoDescription, true)
    updateMetaTag('og:url', currentUrl, true)
    updateMetaTag('og:type', type, true)
    updateMetaTag('og:image', seoImage, true)
    updateMetaTag('og:image:width', '1200', true)
    updateMetaTag('og:image:height', '630', true)
    updateMetaTag('og:locale', language === 'fr' ? 'fr_FR' : 'en_US', true)
    updateMetaTag('og:site_name', 'Qr2Code', true)
    
    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', seoTitle)
    updateMetaTag('twitter:description', seoDescription)
    updateMetaTag('twitter:image', seoImage)
    
    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', currentUrl)

    // Hreflang
    const hreflangs = [
      { lang: 'en', url: `${SITE_URL}/` },
      { lang: 'fr', url: `${SITE_URL}/` },
    ]
    
    hreflangs.forEach(({ lang, url }) => {
      let hreflang = document.querySelector(`link[hreflang="${lang}"]`)
      if (!hreflang) {
        hreflang = document.createElement('link')
        hreflang.setAttribute('rel', 'alternate')
        hreflang.setAttribute('hreflang', lang)
        document.head.appendChild(hreflang)
      }
      hreflang.setAttribute('href', url)
    })

    // Structured Data (JSON-LD)
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Qr2Code',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'Web',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR'
      },
      description: seoDescription,
      url: SITE_URL,
      inLanguage: language === 'fr' ? 'fr' : 'en',
      featureList: [
        'Free QR code generation',
        'Custom colors and design',
        'Logo upload and branding',
        'Multiple formats (PNG, SVG, PDF, JPEG, WebP)',
        'No registration required',
        'Instant generation',
        'Privacy-focused (browser-based)',
        'Mobile-friendly',
        'Error correction levels',
        'Custom corner styles'
      ],
      keywords: language === 'en' 
        ? 'QR code generator, free QR code, online QR code maker, create QR code, custom QR code, QR code with logo'
        : 'générateur QR code, QR code gratuit, créer QR code, QR code personnalisé'
    }

    let script = document.querySelector('script[type="application/ld+json"]')
    if (!script) {
      script = document.createElement('script')
      script.setAttribute('type', 'application/ld+json')
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(structuredData)

    // Track page view in Google Analytics (only if enabled)
    if (GA_ID && window.gtag) {
      window.gtag('config', GA_ID, {
        page_path: location.pathname,
        page_title: seoTitle,
      })
    }
  }, [seoTitle, seoDescription, seoKeywords, seoImage, currentUrl, type, language, location.pathname])

  return null
}

