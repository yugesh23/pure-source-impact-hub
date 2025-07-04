
import { Hero } from "@/components/Hero";
import { AboutResearch } from "@/components/AboutResearch";
import { MissionVision } from "@/components/MissionVision";
import { DonationCategories } from "@/components/DonationCategories";
import { ImpactStories } from "@/components/ImpactStories";
import { Team } from "@/components/Team";
import { GetInvolved } from "@/components/GetInvolved";
import { DownloadResearch } from "@/components/DownloadResearch";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <AboutResearch />
      <MissionVision />
      <DonationCategories />
      <ImpactStories />
      <Team />
      <GetInvolved />
      <DownloadResearch />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
