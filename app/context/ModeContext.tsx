"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Mode = "personal" | "business";

const ModeContext = createContext<{
  mode: Mode;
  toggle: () => void;
}>({
  mode: "personal",
  toggle: () => {},
});

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>("personal");

  useEffect(() => {
    const saved = localStorage.getItem("mode");
    if (saved === "personal" || saved === "business") {
      setMode(saved);
    }
  }, []);

  const toggle = () => {
    const next = mode === "personal" ? "business" : "personal";
    setMode(next);
    localStorage.setItem("mode", next);
  };

  return (
    <ModeContext.Provider value={{ mode, toggle }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  return useContext(ModeContext);
}
