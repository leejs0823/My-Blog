/**
 * Notion API 연동 타입
 * @see https://developers.notion.com/reference
 */

/** 블로그 포스트 변환 후 타입 */
export interface NotionPost {
  id: string;
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  excerpt?: string;
  cover?: string;
}

/** Notion Database 페이지 raw 타입 (properties 구조) */
export interface NotionDatabasePage {
  id: string;
  created_time?: string;
  last_edited_time?: string;
  properties: {
    title?: { title: Array<{ plain_text: string }> };
    Title?: { title: Array<{ plain_text: string }> };
    Name?: { title: Array<{ plain_text: string }> };
    slug?: { rich_text: Array<{ plain_text: string }> };
    Slug?: { rich_text: Array<{ plain_text: string }> };
    date?: { date: { start: string } };
    Date?: { date: { start: string } };
    excerpt?: { rich_text: Array<{ plain_text: string }> };
    Excerpt?: { rich_text: Array<{ plain_text: string }> };
    [key: string]: unknown;
  };
  cover?: {
    type: "file" | "external";
    file?: { url: string };
    external?: { url: string };
  };
}
