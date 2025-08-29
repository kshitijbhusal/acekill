import type { Metadata } from "next";

import "./globals.css";
import { Nav } from './components/Nav';





export const metadata: Metadata = {
  title: "SwiftSend",
  description: "Send text quickly without login.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        <div>




          {children}

        </div>
      </body>
    </html>
  );
}
