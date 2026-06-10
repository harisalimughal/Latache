import type { Metadata } from "next";
import { Sarabun, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const sarabun = Sarabun({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Latache — Book a Tasker",
  description: "Find trusted local taskers for any job.",
  icons: {
    icon: "/images/logo.svg",
    shortcut: "/images/logo.svg",
    apple: "/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sarabun.variable} ${dmSerifDisplay.variable}`}>
        {children}
      </body>
    </html>
  );
}
