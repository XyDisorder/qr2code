import React from "react"

const FORMATS = ["png", "jpeg", "svg", "webp", "pdf" ]

export default function QrFormatSelector({ selected = "png", onSelect }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mt-4">
      {FORMATS.map(fmt => (
        <button
          key={fmt}
          onClick={() => onSelect(fmt)}
          className={`
            px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 transform uppercase tracking-wide
            ${fmt === selected
              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-purple-500/50 scale-105 ring-2 ring-purple-400/50"
              : "bg-gray-700/50 text-gray-300 hover:bg-gray-600/70 hover:scale-105 border border-gray-600/50"
            }
          `}
        >
          {fmt}
        </button>
      ))}
    </div>
  )
}
