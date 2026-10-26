import type { Metadata } from "next";
import ServicesPage from "../../components/services-page";

export const metadata: Metadata = {
  title: "Services | Lumina Speech & Development",
  description: "Speech, fluency, language, reading, and social communication support for children and teens ages 4–18. In-home speech therapy in Chicago and telehealth options.",
};

export default function Page() { return <ServicesPage />; }
