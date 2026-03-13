import { colors } from "./colors";
import { fontFamily, fontSize, fontWeight, lineHeight } from "./fonts";
import { breakpoints, mediaQuery } from "./breakpoints";

export const theme = {
  colors,
  fonts: {
    family: fontFamily,
    size: fontSize,
    weight: fontWeight,
    lineHeight,
  },
  breakpoints,
  mediaQuery,
} as const;

export type Theme = typeof theme;
