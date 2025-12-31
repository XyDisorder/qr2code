import React from 'react';
import Logo from '../common/Logo/Logo'
import { useTranslation } from "@/i18n/TranslationContext"
import LanguageSelector from '../common/LanguageSelector'

function Header() {
  const { t } = useTranslation()
  
  return (
<header className="bg-gray-900/80 backdrop-blur-md text-white shadow-lg border-b border-gray-700/50 sticky top-0 z-50">
  <div className="container mx-auto flex items-center justify-between py-4 px-4 space-x-6">
    <div className="flex items-center space-x-4">
      <Logo className="w-48 h-auto transition-transform duration-300 hover:scale-105" />
      <h1 className="text-xl md:text-2xl uppercase font-semibold tracking-wide whitespace-nowrap bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent transition-all duration-300 hover:scale-105">
        {t('header.tagline')}
      </h1>
    </div>
    <LanguageSelector />
  </div>
</header>
  );
}

export default Header;