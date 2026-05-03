import TopBanner from "@/components/TopBanner/TopBanner";
import Hero from "@/components/Hero/Hero";
import Benefits from "@/components/Benefits/Benefits";
import RecipeCarousel from "@/components/RecipeCarousel/RecipeCarousel";
import HighlightBanner from "@/components/HighlightBanner/HighlightBanner";
import CategoriesGrid from "@/components/CategoriesGrid/CategoriesGrid";
import FeaturesGrid from "@/components/FeaturesGrid/FeaturesGrid";
import AboutCreator from "@/components/AboutCreator/AboutCreator";
import BonusSection from "@/components/BonusSection/BonusSection";
import Testimonials from "@/components/Testimonials/Testimonials";
import Guarantee from "@/components/Guarantee/Guarantee";
import PricingSection from "@/components/PricingSection/PricingSection";
import CTASection from "@/components/CTASection/CTASection";
import FAQ from "@/components/FAQ/FAQ";
import ExitPopup from "@/components/ExitPopup/ExitPopup";

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
      <AboutCreator />
      <BonusSection />
      <Testimonials />
      <Guarantee />
      <PricingSection />
      <CTASection />
      <FAQ />
      <ExitPopup />
    </main>
  );
}
