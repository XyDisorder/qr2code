import React from 'react'
import { useQrSettings } from '../../../../../../store/useQrSettings'
import { useTranslation } from "@/i18n/TranslationContext"
import { FiGrid } from 'react-icons/fi'

const shapes = ['rounded', 'dots', 'classy', 'classy-rounded', 'square', 'extra-rounded']
export default function ShapeSelector() {
  const { t } = useTranslation()
  const { dotType, setDotType } = useQrSettings()
  return (
    <div>
      <h3 className="text-sm font-semibold mb-3 text-gray-200 flex items-center gap-2">
        <FiGrid className="w-4 h-4" />
        {t('settings.advanced.moduleShape.title')}
      </h3>
      <div className="flex flex-wrap gap-2">
        {shapes.map(type => (
          <button 
            key={type} 
            onClick={() => setDotType(type)} 
            className={`
              px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 transform capitalize
              ${dotType === type 
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50 scale-105' 
                : 'bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:bg-gray-700/50 hover:scale-105 hover:border-purple-500/50'
              }
            `}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  )
}