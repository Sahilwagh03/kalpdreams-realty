import Amenities from "./components/Amenities";
import DeliveredProjects from "./components/DeliveredProjects";
import Hero from "./components/Hero";
import PlotSize from "./components/PlotSIze";
import Show from "./components/Show";
import SitePic from "./components/SitePic";
import Tagger from "./components/Tagger";

export default function Home() {
  return (
    <main>
      <Hero />
      <Amenities/>
      <Show/>
      <SitePic/>
      <Tagger/>
      <PlotSize/>
      <DeliveredProjects/>
    </main>
  );
}
