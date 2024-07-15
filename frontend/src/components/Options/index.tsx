import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import brasil from "../../assets/img/brasil.jpg";
import eua from "../../assets/img/eua.jpg";
interface OptionsProp {
  theme: string | null;
  setTheme: (theme: string) => void;
}
function Options({ setTheme, theme }: OptionsProp) {
  const [isOpen, setIsOpen] = useState(false);
  function openMoreOptions() {
    setIsOpen(true);
  }
  function closeMoreOptions() {
    setIsOpen(false);
  }
  function toggleThemeDark() {
    setTheme("dark");
  }
  function toggleThemeLight() {
    setTheme("light");
  }
  return (
    <>
      <button
        onClick={openMoreOptions}
        className="hover:text-blue-700 text-blue-900 fixed right-6 top-36 p-2 border-2 hover:border-slate-400 border-slate-300 dark:border-neutral-800 dark:hover:border-neutral-500  rounded-2xl shadow-lg dark:shadow-black shadow-slate-300 transition delay-100 ease-linear"
      >
        <Menu size={35} />
      </button>
      {isOpen && (
        <div className="dark:bg-neutral-900 bg-slate-50 fixed right-6 top-[114px] rounded-2xl shadow-md dark:shadow-black shadow-slate-300 p-2 border-2 dark:border-neutral-800 border-slate-200 flex items-center gap-2">
          <div className="space-y-1.5">
            <div className="rounded-2xl shadow-md dark:shadow-black shadow-slate-300 w-28 h-11 border-2 dark:border-neutral-800 border-slate-200 flex items-center justify-between px-3">
              <button
                className={`p-0.5 rounded-full ${
                  theme === "light" ? "bg-blue-800 text-slate-200" : ""
                }`}
                onClick={toggleThemeLight}
              >
                <Sun size={30} />
              </button>
              <button
                className={`p-0.5 rounded-full ${
                  theme === "dark" ? "bg-blue-800" : ""
                }`}
                onClick={toggleThemeDark}
              >
                <Moon size={30} />
              </button>
            </div>
            <div className="rounded-2xl shadow-md dark:shadow-black shadow-slate-300 w-28 h-11 border-2 dark:border-neutral-800 border-slate-200 flex items-center justify-between px-3 ">
              <button className="p-0.5 ">
                <img src={eua} alt="" className="w-[2.15rem] h-8 rounded-full" />
              </button>
              <button className="p-0.5 ">
                <img src={brasil} alt="" className="w-[2.15rem] h-8 rounded-full" />
              </button>
            </div>
          </div>
          <button onClick={closeMoreOptions}>
            <X size={35} className="hover:text-blue-700 text-blue-900" />
          </button>
        </div>
      )}
    </>
  );
}

export default Options;
