import { getNotionDatabase } from "./getDatabase";
import { extractText } from "./utils";
import type { NotionPost } from "./types";
import type { NotionDatabasePage } from "./types";

/**
 * Notion Database 페이지를 NotionPost로 변환
 * Database 스키마: title, slug(Slug), date(Date), excerpt
 */
function mapToPost(page: NotionDatabasePage): NotionPost {
  const props = page.properties;
  const title = extractText(
    props.title ?? props.Title ?? props.Name
  );
  const slug =
    extractText(props.slug ?? props.Slug) ||
    page.id.replace(/-/g, "").slice(0, 8);
  const dateProp = props.date ?? props.Date;
  const dateStr =
    dateProp && "date" in dateProp && dateProp.date?.start
      ? dateProp.date.start
      : page.created_time ?? page.last_edited_time ?? "";
  const excerpt = extractText(props.excerpt ?? props.Excerpt);

  let cover: string | undefined;
  const coverProp = page.cover;
  if (coverProp) {
    if (coverProp.type === "external" && coverProp.external?.url) {
      cover = coverProp.external.url;
    }
    if (coverProp.type === "file" && coverProp.file?.url) {
      cover = coverProp.file.url;
    }
  }

  return {
    id: page.id,
    title,
    slug,
    createdAt: dateStr,
    updatedAt: page.last_edited_time ?? dateStr,
    excerpt: excerpt || undefined,
    cover,
  };
}

/**
 * 블로그 포스트 목록 조회
 * 생성일 기준 내림차순
 */
export async function fetchPosts(
  revalidateSeconds: number = 600
): Promise<NotionPost[]> {
  const results = await getNotionDatabase<NotionDatabasePage>(
    undefined,
    undefined,
    "notion-blog-posts",
    revalidateSeconds,
    [{ timestamp: "created_time", direction: "descending" }]
  );

  return results.map(mapToPost);
}

/**
 * slug로 포스트 조회
 */
export async function fetchPostBySlug(
  slug: string,
  revalidateSeconds: number = 600
): Promise<NotionPost | null> {
  const posts = await fetchPosts(revalidateSeconds);
  return posts.find((p) => p.slug === slug) ?? null;
}
