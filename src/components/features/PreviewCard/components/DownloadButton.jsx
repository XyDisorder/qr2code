import React from "react";
import { FiDownload } from "react-icons/fi";
import { useTranslation } from "@/i18n/TranslationContext";

export default function DownloadButton({ onClick }) {
  const { t } = useTranslation()
  
  return (
    <button
      onClick={onClick}
      className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold text-base rounded-xl py-4 px-6 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-2 group"
    >
      <FiDownload className="w-5 h-5 group-hover:animate-bounce" />
      <span>{t('download.button')}</span>
    </button>
  )
}