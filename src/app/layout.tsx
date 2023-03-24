import { Inter } from "next/font/google";
import { Header } from "./components/Header";
import { HeroPattern } from "./components/HeroPattern";
import { Sidebar } from "./components/Sidebar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-zinc-900">
        <Sidebar />
        <div className="ml-80 relative h-screen">
        <Header />
        <HeroPattern />
        <div className="py-24 max-w-4xl px-8 mx-auto">
        {children}
        </div>
        </div>
      </body>
    </html>
  );
}
