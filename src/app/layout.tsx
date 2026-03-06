import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { EmotionRegistry, GlobalStyles, ThemeProvider } from "@/styles";
import { MainLayout } from "@/components/layout/MainLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Blog | Portfolio & Blog",
  description: "Portfolio and Blog integrated website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <EmotionRegistry>
          <GlobalStyles />
          <ThemeProvider>
            <MainLayout>{children}</MainLayout>
          </ThemeProvider>
        </EmotionRegistry>
      </body>
    </html>
  );
}
