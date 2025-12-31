import React, { useState } from 'react'
import ShapeSelector from './components/ShapeSelector'
import LevelSelector from './components/LevelSelector'


export default function AdvancedOptions() {
  const [open, setOpen] = useState(false)
  return (
    <section className="mt-6">
      <h2 className="text-l font-semibold text-blue-400 mb-3">Personnalisation avancée</h2>

      <button
        onClick={() => setOpen(prev => !prev)}
        className={`w-full h-12 bg-gray-600 text-white rounded-lg px-4 py-2 text-left transition hover:bg-gray-500 focus:outline-none ${
          open ? "ring-2 ring-blue-400" : ""
        }`}
      >
        Options avancées {open ? "▲" : "▼"}
      </button>


      {open && (
        <div className="mt-4 grid grid-cols-1 gap-6">
          <ShapeSelector />
          <LevelSelector />
        </div>
)}
    </section>
  )
}