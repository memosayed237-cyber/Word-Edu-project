import "./globals.css";
import { Cairo } from "next/font/google";

const cairo = Cairo({ subsets: ["arabic"] });

export const metadata = {
  title: "منصة تعلم Microsoft Word",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} bg-[#0a0a1a] text-white`}>
        {children}
      </body>
    </html>
  );
}