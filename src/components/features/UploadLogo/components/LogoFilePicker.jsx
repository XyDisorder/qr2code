import { FiFolder, FiUpload } from "react-icons/fi"
import { useQrSettings } from "../../../../store/useQrSettings"

export default function LogoFilePicker() {
  const setLogoSrc = useQrSettings(state => state.setLogoSrc)
  const setLogoName = useQrSettings(state => state.setLogoName)

  const handleFile = e => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => {
      setLogoSrc(reader.result)
      setLogoName(file.name)
    }
    reader.readAsDataURL(file)
  }

  return (
    <label className="h-12 w-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center cursor-pointer hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 shadow-lg shadow-purple-500/30 group">
      <FiUpload className="text-white" size={20} />
      <input type="file" accept="image/*" onChange={handleFile} className="hidden" />
    </label>
  )
}
