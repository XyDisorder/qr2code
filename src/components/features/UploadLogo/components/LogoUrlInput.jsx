import React, { useState, useEffect } from "react" 
import { useQrSettings } from "../../../../store/useQrSettings"  

export default function LogoUrlInput() {
  const { logoSrc, setLogoSrc, setLogoName } = useQrSettings()
  const [error, setError] = useState("")
  
  useEffect(() => {
    if (!logoSrc || logoSrc.startsWith("data:")) {
      setError("");
      return;
    }
    
    try {
      new URL(logoSrc);
      
      const img = new Image();
      img.onload = () => setError("");
      img.onerror = () => setError("URL non valide");

      img.src = logoSrc;
    } catch (e) {
      setError("URL non valide");
      
    }
  }, [logoSrc]);
  
  return (
    <>
  <input
    type="text"
    placeholder="Logo URL"
    value={logoSrc.startsWith("data:") ? "" : logoSrc}
    onChange={e => {
      setLogoName("")
      setLogoSrc(e.target.value)
    }}
    onPaste={e => {
      e.preventDefault()
      const url = e.clipboardData.getData("text/plain").trim()
      setLogoName("")
      setLogoSrc(url)
    }}
    className={`flex-1 h-12 bg-gray-600 text-white rounded-lg px-4 focus:outline-none ${error ? "border-red-500 border" : ""}`}
  />
  {error && (
    <p className="mt-1 text-red-500 text-sm">
      {error}
    </p>
  )}
</>
  )
}
