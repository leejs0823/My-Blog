"use client";

import styled from "@emotion/styled";
import { theme } from "@/styles/tokens";

export const Article = styled.article`
  max-width: 720px;
  margin: 0 auto;
`;

export const BackLink = styled.a`
  display: inline-block;
  margin-bottom: 1.5rem;
  font-size: ${theme.fonts.size.sm};
  opacity: 0.8;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const PageTitle = styled.h1`
  font-size: ${theme.fonts.size["3xl"]};
  font-weight: ${theme.fonts.weight.semibold};
  margin-bottom: 1rem;
  color: var(--foreground);

  ${theme.mediaQuery.tablet} {
    font-size: ${theme.fonts.size["4xl"]};
  }
`;
