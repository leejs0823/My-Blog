"use client";

import styled from "@emotion/styled";
import { theme } from "@/styles/tokens";

export const StyledHeader = styled.header`
  padding: 1rem 2rem;
  border-bottom: 1px solid ${theme.colors.semantic.border};
  background: var(--background);
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;

  a {
    font-weight: ${theme.fonts.weight.medium};
    transition: opacity 0.2s;
  }

  a:hover {
    opacity: 0.7;
  }
`;
