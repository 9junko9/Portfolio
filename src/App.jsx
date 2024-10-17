import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.scss";

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
