import {
  PageWrapper,
  PageTitle,
  ArticleContent,
} from "@/components/layout/PageContent";

export default function AboutPage() {
  return (
    <PageWrapper>
      <PageTitle>About</PageTitle>
      <ArticleContent>
        <p>프로필 및 소개 내용이 여기에 표시됩니다.</p>
      </ArticleContent>
    </PageWrapper>
  );
}
