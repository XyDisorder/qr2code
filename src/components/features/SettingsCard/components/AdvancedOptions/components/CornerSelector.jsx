import React from 'react'
import { useQrSettings } from '../../../../../../store/useQrSettings'
import { useTranslation } from "@/i18n/TranslationContext"
import { FiSquare, FiCircle } from 'react-icons/fi'

const corners = [
  { value: 'square', labelKey: 'square', icon: FiSquare },
  { value: 'dot', labelKey: 'round', icon: FiCircle }
]

export default function CornerSelector() {
  const { t } = useTranslation()
  const { cornerType, setCornerType } = useQrSettings()
  return (
    <div>
      <h3 className="text-sm font-semibold mb-3 text-gray-200 flex items-center gap-2">
        <FiSquare className="w-4 h-4" />
        {t('settings.cornerShape.title')}
      </h3>
      <div className="flex gap-3">
        {corners.map(({ value, labelKey, icon: Icon }) => (
          <button 
            key={value} 
            onClick={() => setCornerType(value)} 
            className={`
              flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform
              ${cornerType === value 
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-purple-500/50 scale-105' 
                : 'bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:bg-gray-700/50 hover:scale-105 hover:border-blue-500/50'
              }
            `}
          >
            <Icon className="w-4 h-4" />
            <span>{t(`settings.cornerShape.${labelKey}`)}</span>
          </button>
        ))}
      </div>
    </div>
  )
}