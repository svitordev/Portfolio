import { useEffect, useState } from "react";
import PortMain from "./pages/PortMain";
import { ToastContainer } from "react-toastify";
function App() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
  }, [theme]);
  return (
    <div className="dark:bg-neutral-900 bg-slate-50 text-neutral-700 dark:text-slate-200 min-h-screen">
      <PortMain setTheme={setTheme} theme={theme}/>
      <ToastContainer position="bottom-left"/>
    </div>
  );
}

export default App;
