import * as S from "./Footer.styled";

export function Footer() {
  return (
    <S.StyledFooter>
      <p>© {new Date().getFullYear()} My Blog. All rights reserved.</p>
    </S.StyledFooter>
  );
}
