import React from "react"

export default function ColorPicker({ label, value, onChange }) {
  const display = value ?? "#000000"

  return (
    <label className="block group">
      <span className="block mb-2.5 text-sm font-semibold text-gray-200">{label}</span>
      <div className="flex items-center bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl px-3 py-2.5 space-x-3 transition-all duration-300 hover:border-blue-500/50 hover:bg-gray-800/70">
        {/* Carré couleur */}
        <input
          type="color"
          value={display}
          onChange={onChange} 
          className="w-12 h-12 p-0 border-2 border-gray-600 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-110 hover:border-blue-400"
        />

        {/* Texte hex */}
        <input
          type="text"
          readOnly
          value={display.toUpperCase()}
          className="flex-1 bg-transparent text-white text-sm font-mono font-semibold focus:outline-none tracking-wide"
        />
      </div>
    </label>
  )
}
