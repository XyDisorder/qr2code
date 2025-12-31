import React from "react"
import { useQrSettings } from "../../../../../../store/useQrSettings";
import ColorPicker from "../../../../../common/ColorPicker";

export function CornerColorSelector() {
const { cornerSquareColor, cornerDotColor, setCornerSquareColor, setCornerDotColor } = useQrSettings();
 
return (
  <>
    <ColorPicker label="Couleur coins internes" 
              value={cornerDotColor} 
              onChange={e => setCornerDotColor(e.target.value)}/>

    <ColorPicker label="Couleur coins externes"  
              value={cornerSquareColor} 
              onChange={e => setCornerSquareColor(e.target.value)
              }/>
  </>
)


}

