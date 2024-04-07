import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { Suspense } from "react";
import SessionProvider from "@/lib/sessionProvider";
import ServerComponentProvider from "@/components/auth/sever.parent";

const noto_Sans_JP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "管理者アプリ",
  description: "管理者用のアプリです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
        <html lang="ja">
          <body className={noto_Sans_JP.className}>
            <Suspense>
              <main className="">{children}</main>
            </Suspense>
          </body>
        </html>
    </SessionProvider>
  );
}
