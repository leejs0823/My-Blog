"use client";

import styled from "@emotion/styled";
import { theme } from "@/styles/tokens";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Main = styled.main`
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;

  ${theme.mediaQuery.tablet} {
    padding: 2rem 3rem;
  }
`;
