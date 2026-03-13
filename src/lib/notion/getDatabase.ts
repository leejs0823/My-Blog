import { cache } from "react";
import { unstable_cache } from "next/cache";
import type { Client } from "@notionhq/client";
import { notionClient, NOTION_DATABASE_ID } from "./instance";
import { parseNotionError } from "./error";

/**
 * Notion Database 쿼리
 */
type NotionSort =
  | { property: string; direction: "ascending" | "descending" }
  | {
      timestamp: "created_time" | "last_edited_time";
      direction: "ascending" | "descending";
    };

async function queryNotionDatabase<T>(
  client: Client,
  databaseId: string,
  sorts?: NotionSort[]
): Promise<T[]> {
  try {
    const response = await client.databases.query({
      database_id: databaseId,
      ...(sorts && sorts.length > 0 ? { sorts } : {}),
    });
    return response.results as unknown as T[];
  } catch (err) {
    parseNotionError(err);
  }
}

/**
 * Notion Database 조회
 */
export const getNotionDatabase = cache(
  async <T>(
    client: Client = notionClient,
    databaseId: string = NOTION_DATABASE_ID || "",
    cacheKey?: string,
    revalidateSeconds: number = 3600,
    sorts?: NotionSort[]
  ): Promise<T[]> => {
    if (!databaseId) {
      return [];
    }

    return unstable_cache(
      async () => {
        try {
          return await queryNotionDatabase<T>(client, databaseId, sorts);
        } catch (error) {
          console.error("[Notion] getNotionDatabase error:", error);
          return [];
        }
      },
      [
        cacheKey ?? `notion-database-${databaseId}`,
        ...(process.env.NODE_ENV === "development"
          ? [Date.now().toString()]
          : []),
      ],
      {
        revalidate:
          process.env.NODE_ENV === "development" ? false : revalidateSeconds,
        tags: ["notion-database", `notion-database-${databaseId}`],
      }
    )();
  }
);
