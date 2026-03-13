"use client";

import { Global, css } from "@emotion/react";
import { theme } from "./tokens";

const globalStyles = css`
  :root {
    --background: ${theme.colors.semantic.background};
    --foreground: ${theme.colors.semantic.foreground};
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    -webkit-text-size-adjust: 100%;
  }

  body {
    font-family: ${theme.fonts.family.sans};
    font-size: ${theme.fonts.size.base};
    font-weight: ${theme.fonts.weight.normal};
    line-height: ${theme.fonts.lineHeight.normal};
    color: var(--foreground);
    background: var(--background);
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* 접근성: 포커스 링 표시 (키보드 네비게이션) */
  :focus-visible {
    outline: 2px solid ${theme.colors.brand.primary};
    outline-offset: 2px;
  }

  /* 포커스 링 숨김 (마우스 클릭 시) */
  :focus:not(:focus-visible) {
    outline: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }
`;

export function GlobalStyles() {
  return <Global styles={globalStyles} />;
}
