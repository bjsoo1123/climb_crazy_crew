import BottomSheet from "@/components/bottomSheet";
import type { Metadata } from "next";
import { Gothic_A1 } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const inter = Gothic_A1({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "클라이밍에 미친 우리",
  description: "세상에 존재하는 암장에 대한 모든 것",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50`}>
        <div className="mx-auto max-w-md min-h-screen bg-white">
          <div className="mx-auto max-w-md">{children}</div>
          <BottomSheet />
        </div>
      </body>
    </html>
  );
}
