import React from "react";
import { useTranslation } from "@/i18n/TranslationContext";
import TextInput from "./components/TextInput";
import RangeSlider from "./components/RangeSlider";
import { useQrSettings } from "../../../store/useQrSettings"
import UploadLogo from "../UploadLogo/UploadLogo";
import AdvancedOptions from "./components/AdvancedOptions/AdvancedOptions";
import ColorPicker from "../../common/ColorPicker";
import CornerSelector from "./components/AdvancedOptions/components/CornerSelector";


function SettingsCard() {
  const { t } = useTranslation()
  const { text, size, fgColor, bgColor, cornerSquareColor, cornerDotColor, setText, setSize, setFgColor, setBgColor, setCornerSquareColor, setCornerDotColor } = useQrSettings()


  return (
    <div className="bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700/50 p-6 md:p-8 space-y-6 flex flex-col h-full transition-all duration-300 hover:shadow-blue-500/20 hover:border-blue-500/30">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-1 h-9 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{t('settings.title')}</h2>
      </div>
      
      <TextInput 
        label={t('settings.textInput.label')} 
        placeholder={t('settings.textInput.placeholder')} 
        value={text}  
        onChange={e => setText(e.target.value)}
        />
     
      <RangeSlider 
        label={t('settings.size.label')} 
        min={100} 
        max={1000} 
        value={size} 
        onChange={e => setSize(+e.target.value)}
      />
     
     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
       <ColorPicker label={t('settings.colors.background')} 
                    value={bgColor} 
                    onChange={e => setBgColor(e.target.value)}/>

        <ColorPicker label={t('settings.colors.foreground')}  
                    value={fgColor} 
                    onChange={e => setFgColor(e.target.value)
                    }/>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <ColorPicker label={t('settings.colors.cornerInner')} 
                    value={cornerDotColor} 
                    onChange={e => setCornerDotColor(e.target.value)}/>

        <ColorPicker label={t('settings.colors.cornerOuter')}  
                    value={cornerSquareColor} 
                    onChange={e => setCornerSquareColor(e.target.value)
                    }/>
      </div>

      <CornerSelector />

      <UploadLogo />

      <AdvancedOptions />

    </div>
  )
}

export default SettingsCard;
