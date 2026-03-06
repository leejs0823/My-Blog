/**
 * Notion properties에서 텍스트 추출
 * title 또는 rich_text 타입의 property에서 plain_text를 추출합니다.
 */
type NotionProperty =
  | { title?: Array<{ plain_text: string }> }
  | { rich_text?: Array<{ plain_text: string }> }
  | { date?: { start: string } }
  | undefined;

export function extractText(property: NotionProperty): string {
  if (!property) return "";
  if ("title" in property && property.title) {
    return property.title.map((t) => t.plain_text).join("");
  }
  if ("rich_text" in property && property.rich_text) {
    return property.rich_text.map((t) => t.plain_text).join("");
  }
  if ("date" in property && property.date?.start) {
    return property.date.start;
  }
  return "";
}
