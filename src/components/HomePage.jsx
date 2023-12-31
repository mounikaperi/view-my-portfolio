import About from "./About";
import ContactUs from "./ContactUs";
import Experience from "./experiences/Experience";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Socials from "./Socials";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Socials />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <ContactUs />
      <Footer />
    </>
  );
}