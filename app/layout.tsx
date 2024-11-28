// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar"; // Left Sidebar
import RightSidebar from "@/components/RightSidebar"; // Right Sidebar

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mail Client",
  description: "A mail client built with Next.js, TypeScript, TailwindCSS, and Shadcn.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Right Sidebar */}
        <RightSidebar />
      </body>
    </html>
  );
}
