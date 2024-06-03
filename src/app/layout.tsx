import type { Metadata } from "next";
import "./globals.css";
import { mukta } from "@/font";
import Navigation from "@/components/sidebar";



export const metadata: Metadata = {
  title: "Ojore's Portfolio",
  description: "Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mukta.className} flex flex-col bg-dark min-h-screen`}>
        <Navigation />
        {children}
        </body>
    </html>
  );
}
