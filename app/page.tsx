import TopBanner from "@/components/TopBanner/TopBanner";
import Hero from "@/components/Hero/Hero";
import Benefits from "@/components/Benefits/Benefits";
import RecipeCarousel from "@/components/RecipeCarousel/RecipeCarousel";
import HighlightBanner from "@/components/HighlightBanner/HighlightBanner";
import CategoriesGrid from "@/components/CategoriesGrid/CategoriesGrid";
import FeaturesGrid from "@/components/FeaturesGrid/FeaturesGrid";
import ShowcaseSection from "@/components/ShowcaseSection/ShowcaseSection";
import BonusSection from "@/components/BonusSection/BonusSection";
import Testimonials from "@/components/Testimonials/Testimonials";
import Guarantee from "@/components/Guarantee/Guarantee";
import PricingSection from "@/components/PricingSection/PricingSection";
import CTASection from "@/components/CTASection/CTASection";
import FAQ from "@/components/FAQ/FAQ";

export default function Home() {
  return (
    <main>
      <TopBanner />
      <Hero />
      <Benefits />
      <RecipeCarousel />
      <HighlightBanner />
      <CategoriesGrid />
      <FeaturesGrid />
      <ShowcaseSection />
      <BonusSection />
      <Testimonials />
      <Guarantee />
      <PricingSection />
      <CTASection />
      <FAQ />
    </main>
  );
}
