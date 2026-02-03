import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Section from "../components/sections/Section";
import Main from "../components/sections/Main";
import CTA from "../components/sections/CTA";
import Accordion from "../components/sections/Accordion"


export const sectionRegistry = {
  hero: Hero,
  main: Main,
  section: Section,
  cta: CTA,
  services: Services,
  accordion: Accordion,
} as const;

export type SectionKey = keyof typeof sectionRegistry;
