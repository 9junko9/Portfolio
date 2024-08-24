import Header from "./components/Header";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.scss";

import "aos/dist/aos.css";
import AOS from "aos";

AOS.init({
  duration: 1000,
  once: true,
});

const App = () => (
  <div className="app-container">
    <Header />
    <main>
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
