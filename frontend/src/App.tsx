import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Options from "./components/Options";
import PlusProjects from "./pages/PlusProjects";
import PortMain from "./pages/PortMain";
function App() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
  }, [theme]);
  return (
    <div className="dark:bg-neutral-900 bg-slate-50 text-neutral-700 dark:text-slate-200 min-h-screen ">
      <Routes>
        <Route path="/" element={<PortMain theme={theme} />} />
        <Route path="/projects" element={<PlusProjects />} />
      </Routes>
      <Options theme={theme} setTheme={setTheme} />
      <ToastContainer position="bottom-left" />
    </div>
  );
}

export default App;
