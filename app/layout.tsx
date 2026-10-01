import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adarsh Gupta | CSE Student, Machine Learning & Software Development",
  description:
    "Portfolio of Adarsh Gupta, a Computer Science & Engineering student at AKGEC focused on software development, machine learning, and problem solving.",
  openGraph: {
    title: "Adarsh Gupta | Machine Learning & Software Development",
    description:
      "Computer Science & Engineering student at AKGEC building software, machine learning, and full-stack projects.",
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
