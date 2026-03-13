# UI Foundation & 디자인 시스템

사이트 전반의 일관된 사용자 경험을 위한 UI Foundation 및 디자인 시스템 가이드입니다.

## 목차

1. [스타일링 전략](#1-스타일링-전략)
2. [디자인 토큰](#2-디자인-토큰)
3. [반응형 설계](#3-반응형-설계)
4. [접근성](#4-접근성)

---

## 1. 스타일링 전략

### Emotion

- **@emotion/react**, **@emotion/styled**: CSS-in-JS
- **@emotion/cache**: Next.js App Router SSR 호환

### 구조

```
src/styles/
├── tokens/           # 디자인 토큰
│   ├── colors.ts
│   ├── fonts.ts
│   ├── breakpoints.ts
│   └── theme.ts
├── EmotionRegistry.tsx   # App Router용 캐시
├── GlobalStyles.tsx      # 전역 리셋 및 기본 스타일
├── ThemeProvider.tsx     # Emotion ThemeProvider
└── emotion.d.ts         # Theme 타입 확장
```

### 컴포넌트 패턴

- `[Name].tsx`: 로직 및 JSX
- `[Name].styled.ts`: Emotion styled 컴포넌트
- `index.ts`: export

### styled import 규칙

- `.styled.ts` 파일 import 시 `import * as S from "./X.styled"` 사용
- JSX에서 `S.ComponentName`으로 참조 (예: `<S.PageWrapper>`, `<S.PageTitle>`)

---

## 2. 디자인 토큰

### Colors (`src/styles/tokens/colors.ts`)

- `gray`: 50~950 스케일
- `brand`: primary, primaryHover
- `semantic`: background, foreground, border

### Fonts (`src/styles/tokens/fonts.ts`)

- `fontFamily`: sans, mono
- `fontSize`: xs ~ 4xl
- `fontWeight`: normal, medium, semibold, bold
- `lineHeight`: tight, normal, relaxed, loose

### Breakpoints (`src/styles/tokens/breakpoints.ts`)

- mobile-first
- `mobile`: 0px (기본), `tablet`: 768px, `desktop`: 1024px
- `theme.mediaQuery.tablet`, `theme.mediaQuery.desktop`로 사용

### 사용 예시

```tsx
import { theme } from "@/styles/tokens";

// styled 컴포넌트 내
font-size: ${theme.fonts.size.lg};
color: ${theme.colors.brand.primary};

${theme.mediaQuery.tablet} {
  padding: 2rem 3rem;
}
```

---

## 3. 반응형 설계

- **mobile-first**: 기본 스타일은 모바일, `mediaQuery`로 확장
- **breakpoints**: `theme.mediaQuery.tablet`, `theme.mediaQuery.desktop`
- MainLayout Main: md 이상에서 padding 확대

---

## 4. 접근성

### 적용 사항

- **:focus-visible**: 키보드 포커스 시 outline 표시
- **:focus:not(:focus-visible)**: 마우스 클릭 시 outline 숨김
- **SkipLink**: "본문으로 건너뛰기" (Tab 첫 포커스)
- **main#main-content**: SkipLink 대상, `tabIndex={-1}`로 프로그래밍 포커스 가능
- **시맨틱 HTML**: header, nav, main, footer, article

### 점검 항목

- [ ] 키보드만으로 전체 네비게이션 가능
- [ ] 포커스 순서 논리적
- [ ] 색상 대비 (WCAG AA 권장)
- [ ] 이미지 alt 텍스트
- [ ] 폼 라벨 연결
