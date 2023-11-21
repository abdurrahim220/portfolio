
import "./App.css";
import Banner from "./component/Banner/Banner";
import About from "./component/About/About";
import Skills from "./component/Skills/Skills";
import Contact from "./component/Contact/Contact";
import Nav from "./component/Nav/Nav";
import Projects from "./component/Projects/Projects";

function App() {
  return (
    <>
      <Banner></Banner>
      <Nav/>
      <About />
      <Skills />
      <Projects/>
      <Contact />
    </>
  );
}

export default App;
