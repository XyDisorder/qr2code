import React from 'react'
import { useQrSettings } from '../../../../../../store/useQrSettings'
import { useTranslation } from "@/i18n/TranslationContext"
import { FiShield } from 'react-icons/fi'

const levels = [
  { value: 'L', labelKey: 'low', desc: '~7%' },
  { value: 'M', labelKey: 'medium', desc: '~15%' },
  { value: 'Q', labelKey: 'high', desc: '~25%' },
  { value: 'H', labelKey: 'maximum', desc: '~30%' }
]

export default function LevelSelector() {
  const { t } = useTranslation()
  const { errorLevel, setErrorLevel } = useQrSettings()
  return (
    <div>
      <h3 className="text-sm font-semibold mb-3 text-gray-200 flex items-center gap-2">
        <FiShield className="w-4 h-4" />
        {t('settings.advanced.errorLevel.title')}
      </h3>
      <div className="grid grid-cols-4 gap-2">
        {levels.map(({ value, labelKey, desc }) => (
          <button 
            key={value} 
            onClick={() => setErrorLevel(value)} 
            className={`
              px-3 py-3 rounded-xl text-xs font-semibold transition-all duration-300 transform flex flex-col items-center gap-1
              ${errorLevel === value 
                ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50 scale-105' 
                : 'bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:bg-gray-700/50 hover:scale-105 hover:border-blue-500/50'
              }
            `}
          >
            <span className="text-base font-bold">{value}</span>
            <span className="text-[10px] opacity-80">{t(`settings.advanced.errorLevel.${labelKey}`)}</span>
            <span className="text-[10px] opacity-60">{desc}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
