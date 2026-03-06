"use client";

import styled from "@emotion/styled";
import { theme } from "@/styles/tokens";

export const StyledTag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  font-size: ${theme.fonts.size.xs};
  font-weight: ${theme.fonts.weight.medium};
  line-height: ${theme.fonts.lineHeight.normal};
  background: ${theme.colors.gray[100]};
  color: var(--foreground);
  border-radius: 0.25rem;
  border: 1px solid ${theme.colors.gray[200]};
`;
