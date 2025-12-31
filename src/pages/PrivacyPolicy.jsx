import React from "react"
import { useTranslation } from "@/i18n/TranslationContext"
import SEO from "../components/seo/SEO"

export default function PrivacyPolicy() {
  const { t } = useTranslation()
  
  return (
    <>
      <SEO 
        title={t('privacy.title') + ' - Qr2Code'}
        description={t('privacy.intro')}
      />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">{t('privacy.title')}</h1>
        <p className="mb-4">
          {t('privacy.intro')}
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">{t('privacy.cookies.title')}</h2>
        <p>
          {t('privacy.cookies.description')}
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">{t('privacy.rights.title')}</h2>
        <p>
          {t('privacy.rights.description')}
        </p>
        <p className="mt-4">
          {t('privacy.contact')} <a href="mailto:xydisorder@gmail.com" className="underline">xydisorder@gmail.com</a>.
        </p>
      </main>
    </>
  )
}
