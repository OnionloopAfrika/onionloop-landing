import type { SectionKey } from "./sections";

export const modes = {
  personal: {
    sections: ["hero", "section", "main", "cta", "accordion"] as SectionKey[],
  },
  business: {
    sections: ["hero", "section", "main", "services", "cta"] as SectionKey[],
  },
} as const;
