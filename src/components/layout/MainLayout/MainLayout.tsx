import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { SkipLink } from "@/components/common/SkipLink";
import * as S from "./MainLayout.styled";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <S.Wrapper>
      <SkipLink />
      <Header />
      <S.Main id="main-content" tabIndex={-1}>
        {children}
      </S.Main>
      <Footer />
    </S.Wrapper>
  );
}
