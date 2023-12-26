
import "./App.css";

import About from "./component/About/About";

import Contact from "./component/Contact/Contact";
import Nav from "./component/Nav/Nav";
import Projects from "./component/Projects/Projects";
import Banner from './component/Banner/Banner';
import Skill from './component/Skills/Skill';
import Skills from './component/Skills/Skills';


function App() {
  return (
    <>
      <Banner></Banner>
      <Nav/>
      <About />
      {/* <Skills /> */}
      <Skill/>
      <Projects/>
      <Contact />
   
    </>
  );
}

export default App;
