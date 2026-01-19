"use client";

import { useMode } from "./context/ModeContext";
import { modes } from "./config/modes";
import { sectionRegistry } from "./config/sections";

export default function HomePage() {
  const { mode } = useMode();
  const { sections } = modes[mode];

  return (
    <>
      {sections.map((key) => {
        const Section = sectionRegistry[key];
        return <Section key={key} />;
      })}
    </>
  );
}
