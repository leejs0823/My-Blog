import Link from "next/link";
import {
  HeroSection,
  PageTitle,
  PageSubtitle,
  CtaLink,
} from "@/components/layout/PageContent";

export default function Home() {
  return (
    <HeroSection>
      <div>
        <PageTitle>Welcome to My Blog</PageTitle>
        <PageSubtitle>
          Portfolio & Blog 통합 웹 사이트입니다. Notion과 Velog 연동을 준비
          중입니다.
        </PageSubtitle>
        <Link href="/blog">
          <CtaLink as="span">블로그 보기</CtaLink>
        </Link>
      </div>
    </HeroSection>
  );
}
