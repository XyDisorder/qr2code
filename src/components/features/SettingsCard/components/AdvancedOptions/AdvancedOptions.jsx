import React, { useState } from 'react'
import { useTranslation } from "@/i18n/TranslationContext"
import ShapeSelector from './components/ShapeSelector'
import LevelSelector from './components/LevelSelector'
import { FiChevronDown, FiSettings } from 'react-icons/fi'


export default function AdvancedOptions() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  return (
    <section className="mt-6">
      <button
        onClick={() => setOpen(prev => !prev)}
        className={`w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-white rounded-xl px-4 py-3 text-left transition-all duration-300 flex items-center justify-between group hover:border-purple-500/50 hover:bg-gray-800/70 ${
          open ? "ring-2 ring-purple-500/50 border-purple-500/50" : ""
        }`}
      >
        <div className="flex items-center gap-2">
          <FiSettings className="w-5 h-5 text-purple-400" />
          <span className="font-semibold text-sm">{t('settings.advanced.title')}</span>
        </div>
        <FiChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>


      {open && (
        <div className="mt-4 grid grid-cols-1 gap-6 animate-fade-in">
          <ShapeSelector />
          <LevelSelector />
        </div>
)}
    </section>
  )
}