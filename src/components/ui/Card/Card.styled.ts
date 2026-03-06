"use client";

import styled from "@emotion/styled";
import { theme } from "@/styles/tokens";

export const StyledCard = styled.article`
  padding: 1.5rem;
  background: var(--background);
  border: 1px solid ${theme.colors.semantic.border};
  border-radius: 0.5rem;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;

  &:hover {
    border-color: ${theme.colors.gray[300]};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  }
`;

export const CardHeader = styled.header`
  margin-bottom: 0.75rem;
`;

export const CardTitle = styled.h3`
  font-size: ${theme.fonts.size.lg};
  font-weight: ${theme.fonts.weight.semibold};
  line-height: ${theme.fonts.lineHeight.tight};
  color: var(--foreground);
`;

export const CardContent = styled.div`
  font-size: ${theme.fonts.size.sm};
  line-height: ${theme.fonts.lineHeight.relaxed};
  color: var(--foreground);
  opacity: 0.9;
`;
