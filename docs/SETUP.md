# my-blog 프로젝트 초기 설정 가이드

Portfolio & Blog 통합 웹 사이트 개발을 위한 초기 세팅 문서입니다.

## 목차

1. [프로젝트 구조](#1-프로젝트-구조)
2. [pnpm Workspace Catalog](#2-pnpm-workspace-catalog)
3. [ESLint / Prettier](#3-eslint--prettier)
4. [Git Hooks (Lefthook)](#4-git-hooks-lefthook)
5. [레이아웃 및 페이지](#5-레이아웃-및-페이지)
6. [Notion API 연동 준비](#6-notion-api-연동-준비)
7. [스타일링 (Emotion)](#7-스타일링-emotion)

---

## 1. 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx
│   ├── blog/, about/
│   └── ...
├── components/
│   ├── common/             # Header, Footer, SkipLink
│   ├── layout/             # MainLayout, PageContent
│   └── ui/                 # Button, Card, Tag
├── styles/                 # Emotion, 토큰, GlobalStyles
│   ├── tokens/             # colors, fonts, breakpoints, theme
│   ├── EmotionRegistry.tsx
│   ├── GlobalStyles.tsx
│   └── ThemeProvider.tsx
├── lib/
│   ├── utils.ts
│   └── notion/
└── types/
```

### 설계 원칙

- **App Router**: Next.js 16 App Router 사용 (`src/app/`)
- **Emotion**: `@emotion/react`, `@emotion/styled` (Tailwind 제외)
- **컴포넌트 패턴**: `[Name].tsx` + `[Name].styled.ts` + `index.ts`
- **경로 별칭**: `@/*` → `./src/*` (tsconfig `paths`)

---

## 2. pnpm Workspace Catalog

의존성 버전을 `pnpm-workspace.yaml`의 `catalog`에 정의하고, `package.json`에서는 `catalog:` 프로토콜로 참조합니다.

### 장점

- 버전 업그레이드 시 한 곳만 수정
- `package.json` merge conflict 감소
- 워크스페이스 내 버전 일관성 유지

### 사용법

새 패키지 추가 시 `pnpm add <package>` 후, `pnpm-workspace.yaml`의 `catalog`에 버전을 추가하고 `package.json`에서 `catalog:`로 교체하면 됩니다.

---

## 3. ESLint / Prettier

### 스크립트

| 명령어              | 설명                   |
| ------------------- | ---------------------- |
| `pnpm lint`         | ESLint 검사            |
| `pnpm lint:fix`     | ESLint 자동 수정       |
| `pnpm format`       | Prettier 포맷 적용     |
| `pnpm format:check` | Prettier 검사만 (CI용) |

### 설정 파일

- **ESLint**: `eslint.config.mjs` (flat config)
  - `eslint-config-next` (core-web-vitals, typescript)
  - `eslint-config-prettier` (Prettier와 충돌 방지)
- **Prettier**: `.prettierrc`, `.prettierignore`

### Prettier 기본값

```json
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80
}
```

---

## 4. Git Hooks (Lefthook)

### 설치

`pnpm install` 시 `prepare` 스크립트로 자동 설치됩니다.

수동 설치:

```bash
pnpm exec lefthook install
```

### 설정 (`lefthook.yml`)

```yaml
pre-commit:
  parallel: true
  jobs:
    - name: lint
      run: pnpm lint:fix
    - name: format
      run: pnpm format
```

커밋 전에 `lint:fix`와 `format`이 자동 실행됩니다.

### CI 환경

`CI=true`일 때 Lefthook 훅 설치를 건너뜁니다. CI에서는 별도로 `pnpm lint`와 `pnpm format:check`를 실행하세요.

---

## 5. 레이아웃 및 페이지

### MainLayout

- `Header` (Main, About, Blog, Project 링크)
- `main` (children)
- `Footer`

### 페이지 구성

| 경로           | 설명                    |
| -------------- | ----------------------- |
| `/`            | Main (첫 애니메이션)    |
| `/about`       | About (포트폴리오)      |
| `/blog`        | Blog                    |
| `/blog/[slug]` | 포스트 상세             |
| `/project`     | Project                 |

---

## 6. Notion API 연동 준비

### 디렉토리 구조

```
src/lib/notion/
├── instance.ts     # @notionhq/client 인스턴스
├── error.ts        # 에러 클래스 및 parseNotionError
├── getDatabase.ts  # 캐시 적용 DB 쿼리 (React cache + unstable_cache)
├── posts.ts        # fetchPosts, fetchPostBySlug
├── types.ts        # NotionPost, NotionDatabasePage
├── utils/
│   └── notionExtract.ts  # extractText (title, rich_text, date)
└── index.ts
```

### 환경 변수

`.env.example`을 복사해 `.env.local` 생성 후 값 설정:

```bash
cp .env.example .env.local
```

| 변수                 | 설명                        |
| -------------------- | --------------------------- |
| `NOTION_API_KEY`     | Notion Integration Token    |
| `NOTION_DATABASE_ID` | 블로그 포스트용 Database ID |

---

## 7. 스타일링 (Emotion)

**Emotion** 기반 디자인 시스템을 사용합니다.

- **디자인 토큰**: `src/styles/tokens/` (colors, fonts, breakpoints)
- **공통 UI**: Button, Card, Tag (`src/components/ui/`)
- **접근성**: SkipLink, :focus-visible, 시맨틱 HTML
- **반응형**: mobile-first, `theme.mediaQuery`

자세한 내용은 [docs/DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)를 참고하세요.

---

## 개발 명령어 요약

```bash
pnpm install    # 의존성 설치 (Lefthook 훅 포함)
pnpm dev       # 개발 서버
pnpm build     # 프로덕션 빌드
pnpm lint      # ESLint
pnpm format    # Prettier
```
