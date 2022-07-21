import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services id='services' />
      <Skills id='skills' />
      <About id='about' />
      <Footer id='footer' />
    </>
  );
}

export default App;
