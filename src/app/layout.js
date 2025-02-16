import { Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

export const metadata = {
  title: "solve-AI",
  description: "AI solutions for your business problems",
  icons: {
    icon: '/favicon.ico',
  }

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
