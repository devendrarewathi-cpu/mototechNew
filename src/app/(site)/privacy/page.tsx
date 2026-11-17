import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = { title: "Privacy" };

export default function Page() {
  return <LegalPage title="Privacy" note="Privacy policy" />;
}
