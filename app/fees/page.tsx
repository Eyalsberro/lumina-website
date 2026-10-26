import type { Metadata } from "next";
import FeesPage from "../../components/fees-page";

export const metadata: Metadata = {
  title: "Fees & Payment | Lumina Speech & Development",
  description:
    "Explore Lumina’s private-pay speech therapy fees, evaluation and session lengths, prepaid packages, and information about superbills and possible out-of-network reimbursement.",
};

export default function Page() {
  return <FeesPage />;
}
