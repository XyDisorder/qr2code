import React from "react";
import TextInput from "./components/TextInput";
import RangeSlider from "./components/RangeSlider";
import { useQrSettings } from "../../../store/useQrSettings"
import UploadLogo from "../UploadLogo/UploadLogo";
import AdvancedOptions from "./components/AdvancedOptions/AdvancedOptions";
import ColorPicker from "../../common/ColorPicker";
import CornerSelector from "./components/AdvancedOptions/components/CornerSelector";


function SettingsCard() {
  const { text, size, fgColor, bgColor, cornerSquareColor, cornerDotColor, setText, setSize, setFgColor, setBgColor, setCornerSquareColor, setCornerDotColor } = useQrSettings()


  return (
    <div className="bg-gray-900 rounded-2xl shadow-lg p-6 space-y-6  flex flex-col  h-full">
      <h2 className="text-2xl font-semibold text-blue-400">Paramètre du Qr Code</h2>
      
      <TextInput 
        label={"Texte ou Url :"} 
        placeholder={"https://exemple.com"} 
        value={text}  
        onChange={e => setText(e.target.value)}
        />
     
      <RangeSlider 
        label="Taille : " 
        min={100} 
        max={1000} 
        value={size} 
        onChange={e => setSize(+e.target.value)}
      />
     
     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
       <ColorPicker label="Couleur de fond" 
                    value={bgColor} 
                    onChange={e => setBgColor(e.target.value)}/>

        <ColorPicker label="Couleur du motif"  
                    value={fgColor} 
                    onChange={e => setFgColor(e.target.value)
                    }/>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <ColorPicker label="Couleur coins internes" 
                    value={cornerDotColor} 
                    onChange={e => setCornerDotColor(e.target.value)}/>

        <ColorPicker label="Couleur coins externes"  
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
