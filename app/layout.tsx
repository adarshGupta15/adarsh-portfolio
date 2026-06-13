import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adarsh Gupta | Software Engineer",
  description:
    "Software Engineer, AI Enthusiast, and B.Tech CSE student building intelligent systems with Python and Machine Learning.",
  openGraph: {
    title: "Adarsh Gupta | Software Engineer",
    description:
      "Portfolio of Adarsh Gupta — ML projects, full-stack work, and continuous learning.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
