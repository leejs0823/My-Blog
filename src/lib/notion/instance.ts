import { Client } from "@notionhq/client";

/**
 * Notion API 클라이언트
 */
const NOTION_API_KEY = process.env.NOTION_API_KEY;
export const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

export const notionClient = new Client({
  auth: NOTION_API_KEY,
});
