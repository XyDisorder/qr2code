import React from "react"
import { useTranslation } from "@/i18n/TranslationContext"
import SEO from "../components/seo/SEO"

export default function LegalMention() {
  const { t } = useTranslation()
  
  return (
    <>
      <SEO 
        title={t('legal.title') + ' - Qr2Code'}
        description={t('legal.title') + ' - ' + (t('legal.editor') + ' ' + t('legal.editorName'))}
      />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">{t('legal.title')}</h1>

        <p className="mb-4">
          {t('legal.editor')} <strong>{t('legal.editorName')}</strong><br/>
          {t('legal.address')} {t('legal.editorAddress')}<br/>
          {t('legal.email')} <a href="mailto:xydisorder@gmail.com" className="underline">xydisorder@gmail.com</a>
        </p>

        <p>
        {t('legal.host')} {t('legal.hostName')}<br/>
        {t('legal.address')} {t('legal.hostAddress')}<br/>
        {t('legal.website')} <a href="https://www.netlify.com" className="underline" target="_blank" rel="noopener noreferrer">
        netlify.com
        </a>
      </p>
      </main>
    </>
  )
}
