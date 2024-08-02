import Options from "../../components/Options";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";
import Technologies from "./Technologies";
interface PortMainProp {
  theme: string | null;
  setTheme: (theme: string) => void;
}
function PortMain({ setTheme, theme }: PortMainProp) {
  return (
    <>
      <Header />
      <Options theme={theme} setTheme={setTheme} />
      <Home theme={theme} />
      <Technologies />
      <AboutMe />
      <Projects />
      <Contact theme={theme} />
    </>
  );
}

export default PortMain;
