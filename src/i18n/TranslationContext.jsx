import React, { createContext, useContext, useState, useEffect } from 'react'
import enTranslations from './translations/en.json'
import frTranslations from './translations/fr.json'

const TranslationContext = createContext()

const translations = {
  en: enTranslations,
  fr: frTranslations
}

export function TranslationProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    // Get from localStorage or default to 'en'
    const saved = localStorage.getItem('qr2code-language')
    return saved || 'en'
  })

  useEffect(() => {
    // Save to localStorage when language changes
    localStorage.setItem('qr2code-language', language)
    // Update HTML lang attribute
    document.documentElement.lang = language
  }, [language])

  const t = (key, params = {}) => {
    const keys = key.split('.')
    let value = translations[language]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    if (typeof value !== 'string') {
      console.warn(`Translation key "${key}" not found for language "${language}"`)
      return key
    }
    
    // Replace parameters like {year}
    return value.replace(/\{(\w+)\}/g, (match, paramKey) => {
      return params[paramKey] || match
    })
  }

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider')
  }
  return context
}

