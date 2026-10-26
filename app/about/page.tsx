import type { Metadata } from "next";
import AboutPage from "../../components/about-page";

export const metadata: Metadata = {
  title: "About Illiana | Lumina Speech & Development",
  description: "Meet Illiana Falkenstern, CCC-SLP, founder of Lumina. Discover her collaborative approach and 13 years of school-based and clinical speech-language experience.",
};

export default function Page() { return <AboutPage />; }
