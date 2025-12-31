import React, { useState, useRef, useEffect } from "react"
import QRCodeStyling from "qr-code-styling"
import DownloadButton from "./components/DownloadButton"
import QrFormatSelector from "./components/QrFormatSelector"
import { useQrSettings } from "../../../store/useQrSettings"
import { useTranslation } from "@/i18n/TranslationContext"

export default function PreviewCard() {
  const { t } = useTranslation()
  const { text, size, fgColor, bgColor, 
    logoSrc, frameSrc, dotType, 
    cornerType, errorLevel, cornerDotColor, cornerSquareColor } = useQrSettings()
  
  const [format, setFormat] = useState("png")
  const qrRef = useRef(null)
  const PREVIEW_SIZE = 300
  const defaultErrorLevel = errorLevel || "H"

  const qr = useRef(new QRCodeStyling({
    width: PREVIEW_SIZE,
    height: PREVIEW_SIZE,
    data: text,
    image: logoSrc,
    dotsOptions: { color: fgColor, type: dotType},
    cornersSquareOptions: {color: cornerSquareColor,  type: cornerType },
    cornersDotOptions: { color: cornerDotColor, type: cornerType },
    backgroundOptions: { color: bgColor },
    imageOptions: { crossOrigin: "anonymous", margin: 5 },
    qrOptions: { errorCorrectionLevel: defaultErrorLevel }
  })).current


  useEffect(() => {
    qr.update({
      data: text,
      width: PREVIEW_SIZE,
      height: PREVIEW_SIZE,
      dotsOptions: { color: fgColor, type: dotType },
      cornersSquareOptions: {color: cornerSquareColor,  type: cornerType },
      cornersDotOptions: { color: cornerDotColor, type: cornerType },
      backgroundOptions: { color: bgColor },
      image: logoSrc,
      qrOptions: { errorCorrectionLevel: defaultErrorLevel }
    })
    qr.append(qrRef.current)
  }, [text, fgColor, bgColor, logoSrc, dotType, cornerType, defaultErrorLevel, cornerSquareColor, cornerDotColor])


  const handleDownload = () => {
    const exporter = new QRCodeStyling({
      width: size,
      height: size,
      data: text,
      image: logoSrc,
      dotsOptions: { color: fgColor, type: dotType },
      cornersSquareOptions: {color: cornerSquareColor,  type: cornerType },
      cornersDotOptions: { color: cornerDotColor, type: cornerType },
      backgroundOptions: { color: bgColor },
      imageOptions: { crossOrigin: "anonymous", margin: 5 },
      qrOptions: { errorCorrectionLevel: defaultErrorLevel }
    })
    exporter.download({ name: "qr2code", extension: format.toLowerCase() })
  }

  return (
    <div className="bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700/50 p-6 md:p-8 flex flex-col space-y-6 transition-all duration-300 hover:shadow-purple-500/20 hover:border-purple-500/30">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-1 h-9 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full"></div>
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{t('preview.title')}</h2>
      </div>
      <div className="relative self-center p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/30 backdrop-blur-sm">
        <div ref={qrRef} className="drop-shadow-2xl" />
        {frameSrc && (
          <img
            src={frameSrc}
            alt="Frame overlay"
            className="absolute inset-0 w-full h-full object-contain pointer-events-none"
          />
        )}
      </div>
      <DownloadButton onClick={handleDownload} />
      <QrFormatSelector selected={format} onSelect={setFormat} />
    </div>
  )
}
