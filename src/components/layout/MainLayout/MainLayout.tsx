import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { SkipLink } from "@/components/common/SkipLink";
import { Wrapper, Main } from "./MainLayout.styled";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <Wrapper>
      <SkipLink />
      <Header />
      <Main id="main-content" tabIndex={-1}>
        {children}
      </Main>
      <Footer />
    </Wrapper>
  );
}
