import { HeroSection } from "../components/HeroSection";
import { ServicesSection } from "../components/ServicesSection";
import { RecommendedJobsSection } from "../components/RecommendedJobsSection";
import { HowItWorksSection } from "../components/HowItWorksSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { PopularProjectsSection } from "../components/PopularProjectsSection";

export function PublicHomeScreen() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <RecommendedJobsSection />
      <HowItWorksSection />
      <PopularProjectsSection />
      <TestimonialsSection />
    </div>
  );
}
