import type { Metadata } from "next";
import PageHeader from "@/components/pageHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Commons Yacht Club",
  description: "Public Sailing Race Organizer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <PageHeader />
      <html lang="en">
        <body>{children}</body>
      </html>
    </div>
  );
}
