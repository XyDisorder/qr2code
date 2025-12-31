import React from "react";
import { FiLink } from "react-icons/fi";
import { sanitizeInput } from "@/utils/security";

function TextInput({ label, placeholder, onChange, value })  {
  const handleChange = (e) => {
    // Sanitize input to prevent XSS
    const sanitized = sanitizeInput(e.target.value, 10000)
    // Create a synthetic event with sanitized value
    const syntheticEvent = {
      target: {
        value: sanitized
      }
    }
    onChange(syntheticEvent)
  }

  return (
    <label className="block group">
      <span className="block mb-2.5 text-sm font-semibold text-gray-200">{label}</span>
      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-400 transition-colors">
          <FiLink className="w-5 h-5" />
        </div>
        <input 
          type="text" 
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          maxLength={10000}
          className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-white text-sm rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:border-gray-600 placeholder:text-gray-500"
        />
      </div>
    </label>
  )
}

export default TextInput;