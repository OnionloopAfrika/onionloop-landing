"use client";

import Link from "next/link";
import { useMode } from "../../context/ModeContext";

export default function ModeToggle() {
  const { mode, toggle } = useMode();

  return (
    <div className="flex items-center gap-2 border border-gray-300 rounded-full p-1 bg-[#E4E7EC] text-sm relative">
      <button
        onClick={() => {
          if (mode !== "personal") toggle();
        }}
        className={`px-3 py-1 rounded-full text-sm transition-colors ${
          mode === "personal"
            ? "bg-white text-(--primary) font-medium shadow-sm"
            : "text-[#98A2B3] hover:text-(--primary)"
        }`}
      >
        Personal
      </button>

      <div className="group relative">
        <button
          onClick={() => {
            if (mode !== "business") toggle();
          }}
          className={`px-3 py-1 rounded-full text-sm transition-colors ${
            mode === "business"
              ? "bg-white text-[#004733] font-medium shadow-sm"
              : "text-[#98A2B3] hover:text-(--primary)"
          }`}
        >
          Business
        </button>

        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 hidden group-hover:block min-w-35 z-50">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col">
            <Link href="#agents" className="w-full text-left px-4 py-3 text-[#667085] hover:bg-gray-50 hover:text-[#004733] transition-colors font-medium">
              Agents
            </Link>
            <Link href="#merchants" className="w-full text-left px-4 py-3 text-[#667085] hover:bg-gray-50 hover:text-[#004733] transition-colors font-medium">
              Merchants
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}