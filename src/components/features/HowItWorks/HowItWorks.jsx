import React from 'react'
import { useTranslation } from '@/i18n/TranslationContext'
import { FiEdit3, FiDroplet, FiDownload } from 'react-icons/fi'

export default function HowItWorks() {
  const { t } = useTranslation()

  const steps = [
    {
      icon: FiEdit3,
      titleKey: 'howItWorks.step1.title',
      descriptionKey: 'howItWorks.step1.description',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FiDroplet,
      titleKey: 'howItWorks.step2.title',
      descriptionKey: 'howItWorks.step2.description',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FiDownload,
      titleKey: 'howItWorks.step3.title',
      descriptionKey: 'howItWorks.step3.description',
      color: 'from-pink-500 to-pink-600'
    }
  ]

  return (
    <section className="max-w-6xl mx-auto mt-16 mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        {t('howItWorks.title')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} mb-4`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {t(step.titleKey)}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t(step.descriptionKey)}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

