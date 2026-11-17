import { Hero } from "@/components/home/Hero";
import { DisciplineBand } from "@/components/home/DisciplineBand";
import { BrandIntro } from "@/components/home/BrandIntro";
import { HeritageSection } from "@/components/home/HeritageSection";
import { InnovationSection } from "@/components/home/InnovationSection";
import { ProductFamilies } from "@/components/home/ProductFamilies";
import { MotorsportSection } from "@/components/home/MotorsportSection";
import { NewsSection } from "@/components/home/NewsSection";
import { CommercialCTA } from "@/components/home/CommercialCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <DisciplineBand />
      <BrandIntro />
      <HeritageSection />
      <InnovationSection />
      <ProductFamilies />
      <MotorsportSection />
      <NewsSection />
      <CommercialCTA />
    </>
  );
}
