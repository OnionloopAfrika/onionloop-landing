"use client";

import { createContext, useCallback, useContext, useSyncExternalStore } from "react";

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

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot(): Mode {
  const saved = localStorage.getItem("mode");
  return saved === "business" ? "business" : "personal";
}

function getServerSnapshot(): Mode {
  return "personal";
}

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const mode = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setMode = useCallback((next: Mode) => {
    localStorage.setItem("mode", next);
    window.dispatchEvent(new Event("storage"));
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