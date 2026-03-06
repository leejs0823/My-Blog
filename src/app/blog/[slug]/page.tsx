import Link from "next/link";
import * as S from "./page.styled";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  return (
    <S.Article>
      <Link href="/blog">
        <S.BackLink as="span">← 목록으로</S.BackLink>
      </Link>
      <S.PageTitle>{slug}</S.PageTitle>
    </S.Article>
  );
}
