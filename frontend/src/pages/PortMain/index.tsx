import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";
import Technologies from "./Technologies";
interface PortMainProp {
  theme: string | null;
}
function PortMain({ theme }: PortMainProp) {
  return (
    <>
      <Header />

      <Home theme={theme} />
      <Technologies />
      <AboutMe />
      <Projects />
      <Contact theme={theme} />
    </>
  );
}

export default PortMain;
