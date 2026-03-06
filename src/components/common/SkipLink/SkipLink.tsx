import Link from "next/link";
import { StyledSkipLink } from "./SkipLink.styled";

export function SkipLink() {
  return (
    <Link href="#main-content">
      <StyledSkipLink as="span">본문으로 건너뛰기</StyledSkipLink>
    </Link>
  );
}
