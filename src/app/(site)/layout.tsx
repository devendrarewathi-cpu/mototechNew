import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

/** Shared chrome for every public page. The route group adds no URL segment. */
export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
