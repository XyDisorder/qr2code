import React from "react";
import { FiMaximize2 } from "react-icons/fi";

export default function RangeSlider({ label, min, max, value, onChange }) {

  return (
    <label className="block group"> 
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold text-gray-200 flex items-center gap-2">
          <FiMaximize2 className="w-4 h-4" />
          {label}
        </span>
        <span className="text-base font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {value}px
        </span>
      </div>
      <input 
        type="range" 
        min={min} 
        max={max} 
        value={value}
        onChange={onChange}
        className="w-full h-2 bg-gray-700/50 rounded-lg appearance-none cursor-pointer accent-gradient-to-r from-blue-500 to-purple-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-blue-500 [&::-webkit-slider-thumb]:to-purple-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-purple-500/50 [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-300 [&::-webkit-slider-thumb]:hover:scale-125 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-gradient-to-r [&::-moz-range-thumb]:from-blue-500 [&::-moz-range-thumb]:to-purple-500 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
        style={{
          background: `linear-gradient(to right, rgb(59, 130, 246) 0%, rgb(168, 85, 247) ${((value - min) / (max - min)) * 100}%, rgb(55, 65, 81) ${((value - min) / (max - min)) * 100}%, rgb(55, 65, 81) 100%)`
        }}
      />
    </label>
  )
}