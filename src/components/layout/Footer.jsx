import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { useTranslation } from "@/i18n/TranslationContext"

export default function Footer() {
  const { t } = useTranslation()
  
  return (
    <footer className="bg-gray-900/80 backdrop-blur-md border-t border-gray-700/50 text-white py-8 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 px-4">
        
        {/* Left : name + copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">Qr2code</span> — {t('footer.copyright')}
        </p>

        {/* Center : legal  */}
        <nav className="flex flex-wrap gap-6 text-sm">
        <a href="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">{t('footer.home')}</a>
        <a href="/mentions-legales" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">{t('footer.legal')}</a>
        <a href="/politique-confidentialite" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">{t('footer.privacy')}</a>
        </nav>

        {/* right : GitHub link*/}
        <a
          href="https://github.com/XyDisorder/qr2code"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
          aria-label="Qr2code sur GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  )
}
