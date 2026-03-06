"use client";

import styled from "@emotion/styled";
import { theme } from "@/styles/tokens";

/**
 * 접근성: 키보드 사용자를 위한 "본문으로 건너뛰기" 링크
 * 포커스 시에만 표시
 */
export const StyledSkipLink = styled.a`
  position: absolute;
  top: -100%;
  left: 1rem;
  z-index: 100;
  padding: 0.75rem 1rem;
  background: ${theme.colors.brand.primary};
  color: ${theme.colors.semantic.background};
  font-size: ${theme.fonts.size.sm};
  font-weight: ${theme.fonts.weight.medium};
  border-radius: 0 0 0.25rem 0.25rem;
  transition: top 0.2s;

  &:focus {
    top: 0;
  }
`;
