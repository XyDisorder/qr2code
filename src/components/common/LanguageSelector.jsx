import React from 'react'
import { useTranslation } from "@/i18n/TranslationContext"
import { FiGlobe } from 'react-icons/fi'

export default function LanguageSelector() {
  const { language, setLanguage } = useTranslation()

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-2 px-3 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300 text-sm font-medium"
        onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
      >
        <FiGlobe className="w-4 h-4" />
        <span className="uppercase">{language}</span>
      </button>
    </div>
  )
}

