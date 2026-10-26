import type { Metadata } from "next";
import GetStartedPage from "../../components/get-started-page";

export const metadata: Metadata = {
  title: "Get Started | Lumina Speech & Development",
  description: "Learn what to expect from intake, evaluation, and personalized speech therapy at Lumina. Explore Chicago service neighborhoods, availability, fees, and next steps.",
};

export default function Page() { return <GetStartedPage />; }
