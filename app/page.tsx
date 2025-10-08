import AboutSummit from "@/components/AboutSummit";
import Agenda from "@/components/Agenda";
import FeaturedSpeakers from "@/components/FeaturedSpeakers";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Sponsors from "@/components/Sponsors";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSummit />
      <FeaturedSpeakers />
      <Agenda />
      <Gallery />
      <Sponsors />
      <Footer />
    </>
  );
}
