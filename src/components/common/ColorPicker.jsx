import React from "react"

const DEFAULT_COLOR = "#000000"

export default function ColorPicker({ label, value, onChange }) {
  const display = value ?? DEFAULT_COLOR

  return (
    <label className="block">
      <span className="block mb-1 text-sm">{label}</span>
      <div className="flex items-center bg-gray-700 rounded-lg px-3 py-2 space-x-3">
        {/* Carré couleur */}
        <input
          type="color"
          value={display}
          onChange={onChange} 
          className="w-10 h-10 p-0 border-0 rounded"
        />

        {/* Texte hex */}
        <input
          type="text"
          readOnly
          value={display.toUpperCase()}
          className="flex-1 bg-transparent text-white text-sm font-medium focus:outline-none"
        />
      </div>
    </label>
  )
}
