import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { LanguageProvider } from "@/lib/language-context";
import { LanguageSwitcher } from "@/components/language-switcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Employee Management System",
  description: "A modern employee management system built with Next.js and Xano",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <nav className="border-b">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <Link href="/" className="text-xl font-bold">
                  EMS
                </Link>
                <div className="flex items-center space-x-4">
                  <Link href="/employees" className="hover:text-gray-600">
                    Employees
                  </Link>
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
          </nav>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
