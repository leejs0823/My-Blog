import Link from "next/link";
import * as S from "./Header.styled";

export function Header() {
  return (
    <S.StyledHeader>
      <S.Nav>
        <Link href="/">Main</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/project">Project</Link>
      </S.Nav>
    </S.StyledHeader>
  );
}
