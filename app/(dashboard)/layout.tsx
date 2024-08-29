'use client'

import { Jost } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import SideBar from "@/app/components/sidebar";
import "@/app/globals.css";

const inter = Jost({ subsets: ["latin"] });

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex ${inter.className} bg-background`}>
        <SideBar />
        <Toaster />
        <div className="flex flex-1 overflow-y-scroll h-screen min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}