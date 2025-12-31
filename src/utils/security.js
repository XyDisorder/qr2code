/**
 * Security utilities for input validation and sanitization
 */

/**
 * Validates if a string is a valid URL
 * @param {string} url - URL to validate
 * @returns {boolean} - True if valid URL
 */
export function isValidUrl(url) {
  if (!url || typeof url !== 'string') return false
  
  try {
    const urlObj = new URL(url)
    // Only allow http and https protocols
    return urlObj.protocol === 'http:' || urlObj.protocol === 'https:'
  } catch {
    return false
  }
}

/**
 * Sanitizes HTML to prevent XSS attacks
 * @param {string} html - HTML string to sanitize
 * @returns {string} - Sanitized HTML
 */
export function sanitizeHtml(html) {
  if (!html || typeof html !== 'string') return ''
  
  // Remove script tags and event handlers
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/on\w+="[^"]*"/gi, '')
    .replace(/on\w+='[^']*'/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/data:text\/html/gi, '')
}

/**
 * Validates and sanitizes SVG content
 * @param {string} svg - SVG string to validate
 * @returns {string|null} - Sanitized SVG or null if invalid
 */
export function sanitizeSvg(svg) {
  if (!svg || typeof svg !== 'string') return null
  
  // Check if it's actually SVG
  if (!svg.trim().startsWith('<svg')) return null
  
  // Remove potentially dangerous elements and attributes
  const sanitized = svg
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/on\w+="[^"]*"/gi, '')
    .replace(/on\w+='[^']*'/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/<iframe/gi, '')
    .replace(/<object/gi, '')
    .replace(/<embed/gi, '')
  
  return sanitized
}

/**
 * Validates image URL and checks if it's from allowed domains
 * @param {string} url - Image URL to validate
 * @param {string[]} allowedDomains - Array of allowed domains (optional)
 * @returns {boolean} - True if URL is valid and allowed
 */
export function isValidImageUrl(url, allowedDomains = []) {
  if (!isValidUrl(url)) return false
  
  try {
    const urlObj = new URL(url)
    
    // Check if it's an image extension
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg']
    const hasImageExtension = imageExtensions.some(ext => 
      urlObj.pathname.toLowerCase().endsWith(ext)
    )
    
    // If allowed domains specified, check domain
    if (allowedDomains.length > 0) {
      return allowedDomains.includes(urlObj.hostname) && hasImageExtension
    }
    
    return hasImageExtension
  } catch {
    return false
  }
}

/**
 * Sanitizes user input text
 * @param {string} input - User input to sanitize
 * @param {number} maxLength - Maximum length allowed
 * @returns {string} - Sanitized input
 */
export function sanitizeInput(input, maxLength = 10000) {
  if (!input || typeof input !== 'string') return ''
  
  // Remove null bytes and control characters
  let sanitized = input
    .replace(/\0/g, '')
    .replace(/[\x00-\x1F\x7F]/g, '')
    .trim()
  
  // Limit length
  if (sanitized.length > maxLength) {
    sanitized = sanitized.substring(0, maxLength)
  }
  
  return sanitized
}

