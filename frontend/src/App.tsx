import { useEffect, useState } from "react";
import Header from "./components/Header";
import Options from "./components/Options";

function App() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
  }, [theme]);
  return (
    <div className="dark:bg-neutral-900 bg-slate-50 text-neutral-700 dark:text-slate-200 min-h-screen">
      <Header />
      <Options theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
