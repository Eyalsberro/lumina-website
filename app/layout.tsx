import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumina Speech & Development | Speech Therapy in Chicago",
  description:
    "Personalized speech-language therapy for children and teens ages 4–18. Meet Illiana Falkenstern, CCC-SLP. In-home care in select Chicago neighborhoods and telehealth appointments.",
  icons: { icon: "/images/lumina-logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
