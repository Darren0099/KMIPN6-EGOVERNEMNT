import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import {
  WhyChooseUs,
  About,
  PuntiKayu,
  Stats,
  Destinations,
  History,
  Explorer,
  CityView,
  MapSection,
} from "@/components/HomeSections";
import Decor from "@/components/Decor";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="bright">
        <WhyChooseUs />
        <About />
        <History />
        <PuntiKayu />
        <Decor name="m10" />
        <Stats />
        <Decor name="m11" />
        <Destinations />
        <Explorer />
        <CityView />
        <Decor name="m3" />
        <MapSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
