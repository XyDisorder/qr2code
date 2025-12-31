import React from "react"
import { FiX, FiImage } from "react-icons/fi"
import { useTranslation } from "@/i18n/TranslationContext"
import LogoUrlInput from "./components/LogoUrlInput"
import LogoFilePicker from "./components/LogoFilePicker"
import { useQrSettings } from "../../../store/useQrSettings"

export default function UploadLogo() {
  const { t } = useTranslation()
  const { logoName, setLogoSrc, setLogoName } = useQrSettings()

  const clear = () => {
    setLogoSrc("")
    setLogoName("")
  }

  return (
    <div className="mt-6">
      <div className="flex items-center gap-2 mb-3">
        <FiImage className="w-4 h-4 text-gray-400" />
        <span className="text-sm font-semibold text-gray-200">{t('settings.logo.title')}</span>
      </div>

      {logoName ? (
        <div className="flex items-center space-x-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-3">
          <p className="flex-1 text-white text-sm font-medium truncate">{logoName}</p>
          <button
            onClick={clear}
            className="h-10 w-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110 shadow-lg shadow-red-500/30"
            aria-label="Supprimer le logo"
          >
            <FiX size={20} className="text-white" />
          </button>
        </div>
      ) : (
        <div className="flex items-center space-x-3">
          <LogoUrlInput />
          <LogoFilePicker />
        </div>
      )}
    </div>
  )
}
