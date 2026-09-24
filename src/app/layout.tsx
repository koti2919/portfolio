import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Annem Kotireddy | Software Developer",
  description:
    "Portfolio of Annem Kotireddy, a Computer Science Engineering student and aspiring Software Developer skilled in Python, Java, MySQL, HTML, CSS, JavaScript and Artificial Intelligence.",
  icons: {
    icon: "/favicon.png",
  },
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