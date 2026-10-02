"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

type Mode = "personal" | "business";

const ModeContext = createContext<{
  mode: Mode;
  toggle: () => void;
  setMode: (mode: Mode) => void;
}>({
  mode: "personal",
  toggle: () => { },
  setMode: () => { },
});

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<Mode>("personal");

  useEffect(() => {
    const saved = localStorage.getItem("mode");
    if (saved === "personal" || saved === "business") {
      setModeState(saved);
    }
  }, []);

  const setMode = useCallback((next: Mode) => {
    setModeState(next);
    localStorage.setItem("mode", next);
  }, []);

  const toggle = useCallback(() => {
    setMode(mode === "personal" ? "business" : "personal");
  }, [mode, setMode]);

  return (
    <ModeContext.Provider value={{ mode, toggle, setMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  return useContext(ModeContext);
}