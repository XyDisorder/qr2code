import React from "react";
import { useTranslation } from "@/i18n/TranslationContext";
import SEO from "../components/seo/SEO";
import SettingsCard from "../components/features/SettingsCard/SettingsCard";
import PreviewCard from "../components/features/PreviewCard/PreviewCard";
import HowItWorks from "../components/features/HowItWorks/HowItWorks";
import Features from "../components/features/Features/Features";
import FAQ from "../components/features/FAQ/FAQ";

function Home() {
  const { t } = useTranslation()
  
  return (
    <>
      <SEO />
      <section className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {t('hero.title')}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {t('hero.description')}
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto items-start">
        <SettingsCard className="h-full flex flex-col justify-between" />
        <div className="lg:sticky lg:top-4 lg:max-h-[calc(100vh-2rem)]">
          <PreviewCard className="flex flex-col justify-between" />
        </div>
      </div>

      {/* Features Section - SEO Rich Content */}
      <Features />

      {/* How It Works Section */}
      <HowItWorks />

      {/* FAQ Section */}
      <FAQ />
    </section>
    </>
  )
}

export default Home;