"use client";

import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { theme } from "./tokens";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
}
