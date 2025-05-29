import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Rmapp',
  description: "Rm for your apps",
  icons: {
    icon: '/images/ascii-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
