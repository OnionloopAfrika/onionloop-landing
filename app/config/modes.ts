import type { SectionKey } from "./sections";

export const modes = {
  personal: {
    sections: ["hero", "main", "section", "cta", "accordion"] as SectionKey[],
  },
  business: {
    sections: ["hero", "main", "section", "services", "cta"] as SectionKey[],
  },
} as const;
