import { FC, createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Options from "./components/Options";
import PlusProjects from "./pages/PlusProjects";
import PortMain from "./pages/PortMain";
interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const App: FC = () => {
  const [theme, setTheme] = useState<string>("dark");
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="dark:bg-neutral-900 bg-slate-50 text-neutral-500 dark:text-slate-200 min-h-screen ">
        <Routes>
          <Route path="/" element={<PortMain />} />
          <Route path="/projects" element={<PlusProjects />} />
        </Routes>
        <Options />
        <ToastContainer position="bottom-left" />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
export { ThemeContext };
