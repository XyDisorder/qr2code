import React from "react"
import { useQrSettings } from "../../../../store/useQrSettings"
import { sanitizeSvg } from "@/utils/security"

export default function QRPreview({ qrCodeData, qrCodeFormat }) {
  const { logoSrc } = useQrSettings()

  // Placeholder when nothing to show
  if (!qrCodeData && !qrCodeFormat) {
    return (
      <div className="bg-gray-900 rounded-lg p-4 flex items-center justify-center flex-1 text-gray-500">
        Aucune prévisualisation
      </div>
    )
  }

  // Sanitize SVG if present
  const sanitizedSvg = qrCodeFormat ? sanitizeSvg(qrCodeFormat) : null

  return (
    <div className="bg-gray-900 rounded-lg p-4 flex items-center justify-center flex-1 relative">
      {sanitizedSvg ? (
        <div
          className="max-w-xs max-h-64 w-full h-full overflow-hidden flex items-center justify-center"
          dangerouslySetInnerHTML={{
            __html: sanitizedSvg
              .replace(/width="[^"]+"/, 'width="100%"')
              .replace(/height="[^"]+"/, 'height="100%"'),
          }}
        />
      ) : qrCodeData ? (
        <img
          src={qrCodeData}
          alt="QR Code Preview"
          className="max-w-xs max-h-64 object-contain"
          crossOrigin="anonymous"
        />
      ) : null}

      {logoSrc && (
        <img
          src={logoSrc}
          alt="Logo Overlay"
          className="absolute"
          crossOrigin="anonymous"
          style={{
            width: "20%",
            height: "20%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
    </div>
  )
}
