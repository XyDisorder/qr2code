import React, { useState, useEffect } from "react" 
import { useQrSettings } from "../../../../store/useQrSettings"  
import { useTranslation } from "@/i18n/TranslationContext"
import { FiLink } from "react-icons/fi"
import { isValidUrl, isValidImageUrl, sanitizeInput } from "@/utils/security"

export default function LogoUrlInput() {
  const { t } = useTranslation()
  const { logoSrc, setLogoSrc, setLogoName } = useQrSettings()
  const [error, setError] = useState("")
  
  useEffect(() => {
    if (!logoSrc || logoSrc.startsWith("data:")) {
      setError("");
      return;
    }
    
    // Validate URL format
    if (!isValidUrl(logoSrc)) {
      setError(t('settings.logo.invalidUrl'));
      return;
    }
    
    // Validate it's an image URL
    if (!isValidImageUrl(logoSrc)) {
      setError(t('settings.logo.invalidUrl'));
      return;
    }
    
    // Verify image loads (CORS check)
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => setError("");
    img.onerror = () => setError(t('settings.logo.invalidUrl'));
    
    img.src = logoSrc;
  }, [logoSrc, t])
  
  return (
    <div className="flex-1">
      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <FiLink className="w-5 h-5" />
        </div>
        <input
          type="text"
          placeholder={t('settings.logo.urlPlaceholder')}
          value={logoSrc.startsWith("data:") ? "" : logoSrc}
          onChange={e => {
            setLogoName("")
            const sanitized = sanitizeInput(e.target.value, 2048)
            setLogoSrc(sanitized)
          }}
          onPaste={e => {
            e.preventDefault()
            const url = sanitizeInput(e.clipboardData.getData("text/plain").trim(), 2048)
            setLogoName("")
            setLogoSrc(url)
          }}
          className={`w-full h-12 bg-gray-800/50 backdrop-blur-sm border ${error ? "border-red-500/50" : "border-gray-700/50"} text-white rounded-xl pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:border-gray-600`}
        />
      </div>
      {error && (
        <p className="mt-2 text-red-400 text-xs flex items-center gap-1">
          <span>⚠</span> {error}
        </p>
      )}
    </div>
  )
}