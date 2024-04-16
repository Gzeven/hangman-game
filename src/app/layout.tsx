import type { Metadata } from "next";
import { Mouse_Memoirs } from "next/font/google";
import "./globals.css";

const MouseMemoirs = Mouse_Memoirs({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Mentor | Hangman Game",
  description:
    "This is a solution to the Hangman game challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={MouseMemoirs.className}>{children}</body>
    </html>
  );
}
