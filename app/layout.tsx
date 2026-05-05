import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miner Perk | Yreka Coffee, Breakfast & Rewards",
  description:
    "A premium mobile-first website concept for Miner Perk in Yreka, California featuring coffee, breakfast, drive-thru convenience, and rewards.",
  keywords: [
    "Miner Perk",
    "Yreka coffee shop",
    "coffee Yreka CA",
    "drive thru coffee Yreka",
    "breakfast Yreka"
  ],
  openGraph: {
    title: "Miner Perk | Yreka Coffee, Breakfast & Rewards",
    description: "Fuel your day with Yreka's premium local coffee stop.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
