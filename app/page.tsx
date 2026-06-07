import AudienceSection from "@/components/AudienceSection";
import CTASection from "@/components/CTASection";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MobileAppSection from "@/components/MobileAppSection";
import Navbar from "@/components/Navbar";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeatureSection />
        <AudienceSection />
        <MobileAppSection />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
