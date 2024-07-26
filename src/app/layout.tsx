import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Heading from "@/components/component/Heading";

const fontHeading = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})


export const metadata: Metadata = {
  title: "Click To Class",
  description: "Get your class link with just a click",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: 'Click To Class',
    // startUpImage: [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontHeading.className} ${fontBody.className}` + ' flex-col justify-center'}>
        <Heading />
        {children}
      </body>
    </html>
  );
}
