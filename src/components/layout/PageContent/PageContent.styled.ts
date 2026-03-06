"use client";

import styled from "@emotion/styled";
import { theme } from "@/styles/tokens";

export const PageWrapper = styled.div`
  padding: 2rem 0;
`;

export const HeroSection = styled.section`
  display: flex;
  min-height: 60vh;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
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

export const PageSubtitle = styled.p`
  font-size: ${theme.fonts.size.lg};
  line-height: ${theme.fonts.lineHeight.relaxed};
  color: var(--foreground);
  opacity: 0.8;
  margin-bottom: 2rem;
`;

export const CtaLink = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: ${theme.colors.brand.primary};
  color: ${theme.colors.semantic.background};
  border-radius: 0.5rem;
  font-weight: ${theme.fonts.weight.medium};
  transition:
    opacity 0.2s,
    background 0.2s;

  &:hover {
    opacity: 0.95;
    background: ${theme.colors.brand.primaryHover};
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 0.75rem;
  }

  a {
    font-weight: ${theme.fonts.weight.medium};
    transition: opacity 0.2s;
  }

  a:hover {
    opacity: 0.7;
  }
`;

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

export const ArticleDate = styled.p`
  font-size: ${theme.fonts.size.sm};
  color: var(--foreground);
  opacity: 0.6;
  margin-bottom: 2rem;
`;

export const ArticleContent = styled.div`
  line-height: ${theme.fonts.lineHeight.relaxed};
  color: var(--foreground);

  p {
    margin-bottom: 1rem;
  }
`;
