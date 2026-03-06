import Link from "next/link";
import * as S from "./SkipLink.styled";

export function SkipLink() {
  return (
    <Link href="#main-content">
      <S.StyledSkipLink as="span">본문으로 건너뛰기</S.StyledSkipLink>
    </Link>
  );
}
