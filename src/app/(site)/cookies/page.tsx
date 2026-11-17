import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = { title: "Cookies" };

export default function Page() {
  return <LegalPage title="Cookies" note="Cookie policy" />;
}
