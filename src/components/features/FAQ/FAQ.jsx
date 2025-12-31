import React, { useState } from 'react'
import { useTranslation } from '@/i18n/TranslationContext'
import { FiChevronDown } from 'react-icons/fi'

export default function FAQ() {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      questionKey: 'faq.q1.question',
      answerKey: 'faq.q1.answer'
    },
    {
      questionKey: 'faq.q2.question',
      answerKey: 'faq.q2.answer'
    },
    {
      questionKey: 'faq.q3.question',
      answerKey: 'faq.q3.answer'
    },
    {
      questionKey: 'faq.q4.question',
      answerKey: 'faq.q4.answer'
    },
    {
      questionKey: 'faq.q5.question',
      answerKey: 'faq.q5.answer'
    }
  ]

  return (
    <section className="max-w-4xl mx-auto mt-16 mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        {t('faq.title')}
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-500/50"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 group"
            >
              <span className="font-semibold text-white text-base flex-1">
                {t(faq.questionKey)}
              </span>
              <FiChevronDown
                className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-300 text-sm leading-relaxed">
                {t(faq.answerKey)}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

