import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExcoSection from "@/components/ExcoSection";
import JubileeEvents from "@/components/JubileeEvents";
import LegacyProjects from "@/components/LegacyProjects";
import GiveBack from "@/components/GiveBack";
import ContactSection from "@/components/ContactSection";

import data from "@/data/content.json";
import { WebsiteContent } from "@/types";

export default function Home() {
  const content = data as unknown as WebsiteContent;

  return (
    <>
      <Navigation items={content.navigation} />
      <main>
        <HeroSection content={content.hero} pillars={content.strategicPillars} />
        <AboutSection content={content.about} />
        <ExcoSection members={content.exco} />
        <JubileeEvents events={content.events} />
        <LegacyProjects content={content.legacy} />
        <GiveBack content={content.giveBack} />
        <ContactSection content={content.contact} />
      </main>
      <Footer content={content.footer} navItems={content.navigation} />
    </>
  );
}
