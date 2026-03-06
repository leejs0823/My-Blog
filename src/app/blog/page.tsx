import Link from "next/link";
import { fetchPosts } from "@/lib/notion";
import {
  PageWrapper,
  PageTitle,
  PageSubtitle,
  List,
} from "@/components/layout/PageContent";

export default async function BlogPage() {
  const posts = await fetchPosts();

  return (
    <PageWrapper>
      <PageTitle>Blog</PageTitle>
      <PageSubtitle>
        {posts.length > 0
          ? `${posts.length}개의 포스트`
          : "Notion 연동 후 포스트 목록이 표시됩니다. .env.local에 NOTION_API_KEY, NOTION_DATABASE_ID를 설정하세요."}
      </PageSubtitle>
      <List>
        {posts.length > 0 ? (
          posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          ))
        ) : (
          <li>
            <Link href="/blog/sample-post">샘플 포스트 (골격)</Link>
          </li>
        )}
      </List>
    </PageWrapper>
  );
}
