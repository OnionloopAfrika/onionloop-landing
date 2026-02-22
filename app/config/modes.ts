import type { SectionKey } from "./sections";

export const modes = {
  personal: {
    sections: ["hero", "main","trust", "section", "cta", "accordion"] as SectionKey[],
  },
  business: {
    sections: ["hero", "main","trust", "section", "services", "cta"] as SectionKey[],
  },
} as const;
