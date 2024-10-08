import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticlesContainer from "./components/ParticlesContainer";

export default function Home() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-fuchsia-400 selection:text-fuchsia-950">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen [background:radial-gradient(125%_125%_at_50%_10%,#04001d_40%,#680063_100%)]">
          <ParticlesContainer />
        </div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />

        <Hero />

        <About />

        <Tech />

        <Projects />

        <Contact />

        <Footer />
      </div>
    </div>
  );
}
