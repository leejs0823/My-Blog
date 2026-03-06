import { StyledFooter } from "./Footer.styled";

export function Footer() {
  return (
    <StyledFooter>
      <p>© {new Date().getFullYear()} My Blog. All rights reserved.</p>
    </StyledFooter>
  );
}
