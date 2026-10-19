import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Party Services & Rentals | Advertising & More — Concept",
  description:
    "A custom Party Services & Rentals landing-page concept inspired by Advertising & More's brand identity. Explore event styling, rentals, experiences and enquiry options.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}