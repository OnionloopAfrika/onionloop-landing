"use client";

import { useMode } from "../../context/ModeContext";

export default function ModeToggle() {
  const { mode, toggle } = useMode()

  return (
    <div className="flex items-center gap-2 border border-gray-300 rounded-full p-1 bg-[#E4E7EC] text-sm">
      <button
        onClick={() => {
          if (mode !== "personal") toggle()
        }}
        className={`px-3 py-1 rounded-full text-sm transition-colors ${
          mode === "personal" ? "bg-white text-(--primary) font-medium" : "text-[#98A2B3] hover:text-(--primary)"
        }`}
      >
        Personal
      </button>
      <button
        onClick={() => {
          if (mode !== "business") toggle()
        }}
        className={`px-3 py-1 rounded-full text-sm transition-colors ${
          mode === "business" ? "bg-white text-(--primary) font-medium" : "text-[#98A2B3] hover:text-(--primary)"
        }`}
      >
        Business
      </button>
    </div>
  )
}
