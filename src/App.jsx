import Header from "./components/Header";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import "./App.scss"; // Assure-toi d'importer les styles

const App = () => (
  <div className="app-container">
    <Header />
    <main>
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
  </div>
);

export default App;
