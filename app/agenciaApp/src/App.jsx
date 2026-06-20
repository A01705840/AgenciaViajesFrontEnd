import Hero from './components/Hero'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DestinationCards from "./components/DestinationCards";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import AboutSection from "./components/AboutSection";

export default function App() {
  return (
    <main className="App">
      <Navbar />
      <Hero />
      <section id="destinos">
        <h1  className="text-4xl font-serif text-center mt-12 mb-6 text-ink">
            Destinos Destacados
        </h1>
        <DestinationCards /> 
      </section>
      <section id="opiniones">
        <Testimonials />
      </section>
      <AboutSection />
      <FAQ />
      <Footer />
    </main>
    
  )
}