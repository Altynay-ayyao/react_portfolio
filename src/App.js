import "./App.css";
import NavigaionBar from "./screens/navigation/NavigationBar";
import ParticleAnimation from "react-particle-animation";
import Header from "./screens/header/Header";
import AboutMe from "./screens/aboutMe/AboutMe";
import Portfolio from "./screens/portfolio/Portfolio";
import Skills from "./screens/skills/Skills";
import ContactMe from "./screens/contackMe/ContactMe";

function App() {
  return (
    <div className="App">
      <NavigaionBar />
      <Header />
      <ParticleAnimation
        className="animation"
        background={{ r: 5, g: 10, b: 23, a: 20 }}
        particleSpeed={0.1}
        particleRadius={0.5}
      />
      <AboutMe />
      <Skills />
      <Portfolio />
      <ContactMe />
    </div>
  );
}

export default App;
