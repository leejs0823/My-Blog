"use client";

import styled from "@emotion/styled";
import { theme } from "@/styles/tokens";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface StyledButtonProps {
  $variant?: ButtonVariant;
  $fullWidth?: boolean;
}

const variantStyles = {
  primary: `
    background: ${theme.colors.brand.primary};
    color: ${theme.colors.semantic.background};
    border: 1px solid transparent;
    &:hover {
      background: ${theme.colors.brand.primaryHover};
    }
  `,
  secondary: `
    background: transparent;
    color: var(--foreground);
    border: 1px solid ${theme.colors.semantic.border};
    &:hover {
      background: ${theme.colors.gray[100]};
    }
  `,
  ghost: `
    background: transparent;
    color: var(--foreground);
    border: 1px solid transparent;
    &:hover {
      background: ${theme.colors.gray[100]};
    }
  `,
};

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: ${theme.fonts.size.sm};
  font-weight: ${theme.fonts.weight.medium};
  line-height: ${theme.fonts.lineHeight.normal};
  border-radius: 0.5rem;
  transition:
    background 0.2s,
    border-color 0.2s;

  ${({ $variant = "primary" }) => variantStyles[$variant]}
  ${({ $fullWidth }) => $fullWidth && "width: 100%;"}

  /* 접근성: 포커스 시 outline은 GlobalStyles에서 처리 */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
