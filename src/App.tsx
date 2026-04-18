import "./index.css";
import { SiteNav } from "./components/site/SiteNav";
import { Home } from "./components/site/Home";
import { About } from "./components/site/About";
import { Experience } from "./components/site/Experience";
import { Projects } from "./components/site/Projects";
import { Contact } from "./components/site/Contact";
import { Footer } from "./components/site/Footer";

export function App() {
  return (
    <>
      <SiteNav />
      <main>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
