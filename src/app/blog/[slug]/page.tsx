import { notFound } from "next/navigation";
import Link from "next/link";
import { fetchPostBySlug } from "@/lib/notion";
import {
  Article,
  BackLink,
  PageTitle,
  ArticleDate,
  ArticleContent,
} from "@/components/layout/PageContent";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const post = await fetchPostBySlug(slug);

  // Notion 데이터 없을 때 sample-post 폴백 (개발용)
  if (!post) {
    if (slug === "sample-post") {
      return (
        <Article>
          <Link href="/blog">
            <BackLink as="span">← 목록으로</BackLink>
          </Link>
          <PageTitle>샘플 포스트</PageTitle>
          <ArticleDate>2025-03-06</ArticleDate>
          <ArticleContent>
            <p>Notion Database 연동 후 실제 콘텐츠가 표시됩니다.</p>
          </ArticleContent>
        </Article>
      );
    }
    notFound();
  }

  return (
    <Article>
      <Link href="/blog">
        <BackLink as="span">← 목록으로</BackLink>
      </Link>
      <PageTitle>{post.title}</PageTitle>
      <ArticleDate>{post.createdAt}</ArticleDate>
      <ArticleContent>
        {post.excerpt && <p>{post.excerpt}</p>}
        <p>블록 콘텐츠 렌더링은 notion-client 연동 후 추가됩니다.</p>
      </ArticleContent>
    </Article>
  );
}
