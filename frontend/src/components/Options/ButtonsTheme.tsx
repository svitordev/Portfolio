import { useContext } from "react";
import { ThemeContext } from "../../App";
import { FiSun } from "react-icons/fi";
import { LuMoonStar } from "react-icons/lu";

function ButtonsTheme() {
 const context = useContext(ThemeContext);
 if (!context) {
   throw new Error("Options deve ser usado dentro de um ThemeContext.Provider");
 }
 const { theme, setTheme } = context;
 function toggleThemeDark() {
   setTheme("dark");
 }
 function toggleThemeLight() {
   setTheme("light");
 }
  return (
    <div className="rounded-2xl shadow-md dark:shadow-black shadow-slate-300 w-28 h-11 border-2 dark:border-neutral-800 border-slate-200 flex items-center justify-between px-3">
      <button
        className={`p-0.5 rounded-full ${
          theme === "light" ? "bg-blue-800 text-slate-200" : ""
        }`}
        onClick={toggleThemeLight}
        type="button"
      >
        <FiSun size={30} />
      </button>
      <button
        className={`p-0.5 rounded-full ${
          theme === "dark" ? "bg-blue-800" : ""
        }`}
        onClick={toggleThemeDark}
        type="button"
      >
        <LuMoonStar size={30} />
      </button>
    </div>
  );
}

export default ButtonsTheme;
