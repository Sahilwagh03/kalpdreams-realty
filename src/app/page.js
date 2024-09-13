import AboutUs from "./components/AboutUs";
import Amenities from "./components/Amenities";
import ContactSection from "./components/ContactUsSection";
import DeliveredProjects from "./components/DeliveredProjects";
import Hero from "./components/Hero";
import PlotSize from "./components/PlotSIze";
import ProjectDetailsSection from "./components/ProjectDetailsSection";
import Show from "./components/Show";
import SitePic from "./components/SitePic";
import StatsSection from "./components/StatsSection";
import Tagger from "./components/Tagger";
import Testimonials from "./components/Testinomial";

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsSection/>
      <Amenities/>
      <AboutUs/>
      <ProjectDetailsSection />
      <Show/>
      <SitePic/>
      <Tagger/>
      <PlotSize/>
      <DeliveredProjects/>
      <ContactSection/>
      <Testimonials/>
    </main>
  );
}
