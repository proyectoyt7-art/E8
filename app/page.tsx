import Hero from "@/components/Hero/Hero";
import Benefits from "@/components/Benefits/Benefits";
import RecipeCarousel from "@/components/RecipeCarousel/RecipeCarousel";
import HighlightBanner from "@/components/HighlightBanner/HighlightBanner";
import CategoriesGrid from "@/components/CategoriesGrid/CategoriesGrid";
import FeaturesGrid from "@/components/FeaturesGrid/FeaturesGrid";
import AboutCreator from "@/components/AboutCreator/AboutCreator";
import BonusSection from "@/components/BonusSection/BonusSection";
import PricingSection from "@/components/PricingSection/PricingSection";
import CTASection from "@/components/CTASection/CTASection";
import Guarantee from "@/components/Guarantee/Guarantee";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/FAQ/FAQ";
import ExitPopup from "@/components/ExitPopup/ExitPopup";

export default function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <RecipeCarousel />
      <HighlightBanner />
      <CategoriesGrid />
      <FeaturesGrid />
      <AboutCreator />
      <BonusSection />
      <PricingSection />
      <CTASection />
      <Guarantee />
      <Testimonials />
      <FAQ />
      <ExitPopup />
    </main>
  );
}
