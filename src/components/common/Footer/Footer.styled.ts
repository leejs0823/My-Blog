"use client";

import styled from "@emotion/styled";
import { theme } from "@/styles/tokens";

export const StyledFooter = styled.footer`
  padding: 2rem;
  margin-top: auto;
  border-top: 1px solid ${theme.colors.semantic.border};
  text-align: center;
  font-size: ${theme.fonts.size.sm};
  color: var(--foreground);
  opacity: 0.8;
`;
