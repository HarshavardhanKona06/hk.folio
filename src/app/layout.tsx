import type { Metadata } from "next";
import React from "react";
import "../styles/globals.css";
import { poppins, caveat, crimsonPro, firaCode, firaSans } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Harshavardhan Kona",
  description: "Harshavardhan Kona's Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
          className={`${poppins.variable} ${caveat.variable} ${crimsonPro.variable} 
          ${firaCode.variable} ${firaSans.variable} antialiased`}>
      <body>
        {children}
      </body>
    </html>
  );
}
