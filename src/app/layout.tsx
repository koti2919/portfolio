import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Annem Kotireddy | Software Developer",
  description:
    "Portfolio of Annem Kotireddy — Software Developer skilled in Python, Java, SQL, AI and modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}