import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main
      className="min-h-screen text-black bg-cover bg-center bg-fixed bg-no-repeat"
      style={{
        backgroundImage: 'url("/background.png")',
      }}
    >
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      <Resume />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}