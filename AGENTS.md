# my-blog Repository Guidelines

## Project Overview

Portfolio & Blog 통합 웹 사이트. Notion API 연동으로 블로그 포스트를 관리합니다.

## Tech Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Emotion (`@emotion/react`, `@emotion/styled`) — Tailwind 미사용
- pnpm + catalog
- Lefthook (pre-commit: lint, format)

## Project Structure

```
src/
├── app/              # App Router 페이지
├── components/
│   ├── common/       # Header, Footer, SkipLink
│   ├── layout/       # MainLayout, PageContent
│   └── ui/           # Button, Card, Tag
├── styles/           # tokens, GlobalStyles, EmotionRegistry
├── lib/
│   ├── utils.ts
│   └── notion/       # Notion API
└── types/
```

## Coding Conventions

### 컴포넌트 패턴

- `[Name].tsx`: 로직 및 JSX
- `[Name].styled.ts`: Emotion styled (상단에 `"use client"`)
- `index.ts`: export

### 경로 별칭

`tsconfig.json` → `compilerOptions.paths`에서 설정:

| 별칭 | 경로 |
|------|------|
| `@/*` | `./src/*` |
| `@components/*` | `./src/components/*` |
| `@lib/*` | `./src/lib/*` |
| `@styles/*` | `./src/styles/*` |
| `@types/*` | `./src/types/*` |

### Emotion

- styled 컴포넌트는 DOM에 전달되지 않는 props에 `$` prefix 사용 (예: `$variant`)
- Next.js Link와 함께 사용 시 `as={Link}` 대신 `<Link><Styled as="span" /></Link>` 패턴

### 디자인 토큰

- `theme.colors`, `theme.fonts`, `theme.mediaQuery` 사용
- breakpoints: `mobile`, `tablet`, `desktop`

### Notion

- `@notionhq/client` 사용
- `getNotionDatabase` (cache + unstable_cache)
- `extractText`로 properties 추출

## Commit & Branch

- **Commit**: `type: summary` (50자 이내, 마침표 없음)
- **Branch**: `feature/`, `hotfix/`, `refactor/`, `infra/`
- 커밋 유형: feat, fix, mod, style, design, docs, refactor, chore, test

## Commands

```bash
pnpm install
pnpm dev
pnpm lint
pnpm format
```
