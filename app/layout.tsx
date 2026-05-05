import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SportsCardPulse — Your Sports Card Collection, Intelligently Managed",
  description: "AI-powered sports card identification, real-time eBay pricing, portfolio tracking and P&L. Built for serious UK collectors.",
  openGraph: {
    title: "SportsCardPulse — Your Sports Card Collection, Intelligently Managed",
    description: "Scan any card with your camera. Get instant eBay pricing. Track your portfolio P&L.",
    type: "website",
    url: "https://www.sportscardpulse.app",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
