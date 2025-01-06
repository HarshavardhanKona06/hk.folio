import LandingSection from "@/components/sections/landingSection";
import AboutMeSection from "@/components/sections/aboutMeSection";
import UnderConstruction from "@/components/sections/under-construction";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
      <main>
          <LandingSection />
          <AboutMeSection />
          <UnderConstruction />
          <Footer />
      </main>
  );
}
