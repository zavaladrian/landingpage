import "./globals.css";
import { Red_Hat_Display } from "next/font/google";

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["500", "900"],
  variable: "--font-red-hat",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${redHat.variable} font-display bg-offwhite text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
