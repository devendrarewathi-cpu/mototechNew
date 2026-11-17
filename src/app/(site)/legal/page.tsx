import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = { title: "Legal" };

export default function Page() {
  return <LegalPage title="Legal" note="Legal notice" />;
}
