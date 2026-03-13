import {
  isNotionClientError,
  APIResponseError,
} from "@notionhq/client";

/**
 * 네트워크/전송 계층 에러
 */
export class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NetworkError";
  }
}

/**
 * 클라이언트 에러 (4xx)
 */
export class ClientError extends Error {
  constructor(
    public code: number,
    message: string
  ) {
    super(message);
    this.name = "ClientError";
  }
}

/**
 * 서버 에러 (5xx)
 */
export class ServerError extends Error {
  constructor(
    public code: number,
    message: string
  ) {
    super(message);
    this.name = "ServerError";
  }
}

/**
 * Notion API 에러를 프로젝트 에러 타입으로 변환
 */
export function parseNotionError(err: unknown): never {
  if (isNotionClientError(err)) {
    if (err instanceof APIResponseError) {
      const status = err.status;
      const message = err.message;

      if (status >= 400 && status < 500) {
        throw new ClientError(status, message);
      }
      if (status >= 500) {
        throw new ServerError(status, message);
      }
      throw new ClientError(status, message);
    }
    throw new NetworkError(err.message);
  }

  if (err instanceof Error) {
    throw new NetworkError(err.message);
  }

  throw new NetworkError("Unknown error occurred");
}
