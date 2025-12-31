import React from 'react'
import { useTranslation } from '@/i18n/TranslationContext'
import { FiZap, FiDroplet, FiDownload, FiShield, FiGlobe, FiSmartphone } from 'react-icons/fi'

export default function Features() {
  const { t } = useTranslation()

  const features = [
    {
      icon: FiZap,
      titleKey: 'features.fast.title',
      descriptionKey: 'features.fast.description',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: FiDroplet,
      titleKey: 'features.customizable.title',
      descriptionKey: 'features.customizable.description',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FiDownload,
      titleKey: 'features.formats.title',
      descriptionKey: 'features.formats.description',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiShield,
      titleKey: 'features.secure.title',
      descriptionKey: 'features.secure.description',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FiGlobe,
      titleKey: 'features.online.title',
      descriptionKey: 'features.online.description',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: FiSmartphone,
      titleKey: 'features.mobile.title',
      descriptionKey: 'features.mobile.description',
      color: 'from-pink-500 to-rose-500'
    }
  ]

  return (
    <section className="max-w-7xl mx-auto mt-16 mb-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {t('features.title')}
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          {t('features.subtitle')}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} mb-4`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {t(feature.titleKey)}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t(feature.descriptionKey)}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

