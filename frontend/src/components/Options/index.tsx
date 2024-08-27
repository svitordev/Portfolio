import { useState } from "react";
import { FiSun } from "react-icons/fi";
import { IoClose, IoMenu } from "react-icons/io5";
import { LuMoonStar } from "react-icons/lu";
import brasil from "../../assets/img/structure/brasil.jpg";
import eua from "../../assets/img/structure/eua.jpg";
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
        className="dark:bg-neutral-900 bg-slate-50 hover:text-blue-700 text-blue-900 fixed right-3 lg:right-6 top-[6.1rem] md:top-36 p-2 border-2 hover:border-slate-400 border-slate-300 dark:border-neutral-800 dark:hover:border-neutral-500  rounded-2xl shadow-lg dark:shadow-black shadow-slate-200 transition delay-100 ease-linear z-40"
      >
        <IoMenu size={35} />
      </button>
      {isOpen && (
        <div className="dark:bg-neutral-900 bg-slate-50 fixed right-3 lg:right-6 top-[6.1rem] md:top-[7.2rem] rounded-2xl shadow-md dark:shadow-neutral-950 shadow-slate-300 p-2 border-2 dark:border-neutral-800 border-slate-200 flex items-start md:items-center gap-2 z-50">
          <div className="space-y-1.5">
            <div className="rounded-2xl shadow-md dark:shadow-black shadow-slate-300 w-28 h-11 border-2 dark:border-neutral-800 border-slate-200 flex items-center justify-between px-3">
              <button
                className={`p-0.5 rounded-full ${
                  theme === "light" ? "bg-blue-800 text-slate-200" : ""
                }`}
                onClick={toggleThemeLight}
              >
                <FiSun size={30} />
              </button>
              <button
                className={`p-0.5 rounded-full ${
                  theme === "dark" ? "bg-blue-800" : ""
                }`}
                onClick={toggleThemeDark}
              >
                <LuMoonStar size={30} />
              </button>
            </div>
            <div className="rounded-2xl shadow-md dark:shadow-black shadow-slate-300 w-28 h-11 border-2 dark:border-neutral-800 border-slate-200 flex items-center justify-between px-3 ">
              <button disabled className="p-0.5 ">
                <img
                  src={eua}
                  alt=""
                  className="w-[2.15rem] h-8 rounded-full"
                />
              </button>
              <button disabled className="p-0.5 ">
                <img
                  src={brasil}
                  alt=""
                  className="w-[2.15rem] h-8 rounded-full"
                 />
              </button>
            </div>
          </div>
          <button onClick={closeMoreOptions}>
            <IoClose size={35} className="hover:text-blue-700 text-blue-900" />
          </button>
        </div>
      )}
    </>
  );
}

export default Options;
