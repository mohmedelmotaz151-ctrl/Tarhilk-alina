import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ترحيلك علينا | رحلتك تبدأ من هنا",
  description: "منصة تجمع الباحثين عن ترحيل وأصحاب السيارات بسهولة ووضوح.",
  applicationName: "ترحيلك علينا",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>;
}
