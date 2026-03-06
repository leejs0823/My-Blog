import Link from "next/link";
import { StyledHeader, Nav } from "./Header.styled";

export function Header() {
  return (
    <StyledHeader>
      <Nav>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
      </Nav>
    </StyledHeader>
  );
}
