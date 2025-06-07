import { Manrope } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

export const metadata = {
  title: "Solve-AI",
  description: "Transform your business with AI strategy consulting, process automation, and predictive analytics. We help businesses solve challenges, scale operations, and simplify workflows using cutting-edge artificial intelligence technology.",
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
        <SpeedInsights />
      </body>
    </html>
  );
}
