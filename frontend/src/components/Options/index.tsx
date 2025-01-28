import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import ButtonsTheme from "./ButtonsTheme";
import ButtonsTranslate from "./ButtonsTranslate";

function Options() {
  const [isOpen, setIsOpen] = useState(false);
  function openMoreOptions() {
    setIsOpen(true);
  }
  function closeMoreOptions() {
    setIsOpen(false);
  }

  return (
    <>
      <button
        onClick={openMoreOptions}
        className="dark:bg-neutral-800 bg-slate-50 hover:text-blue-700 text-blue-900 fixed right-3 lg:right-6 top-[6.1rem] md:top-36 p-2 border-2 hover:border-slate-400 border-slate-300 dark:border-neutral-600 dark:hover:border-neutral-500  rounded-2xl shadow-lg dark:shadow-black shadow-slate-200 transition delay-100 ease-linear z-40"
        type="button"
      >
        <IoMenu size={35} />
      </button>
      {isOpen && (
        <div className="dark:bg-neutral-900 bg-slate-50 fixed right-3 lg:right-6 top-[6.1rem] md:top-[7.2rem] rounded-2xl shadow-md dark:shadow-neutral-950 shadow-slate-300 p-2 border-2 dark:border-neutral-800 border-slate-200 flex items-start md:items-center gap-2 z-50">
          <div className="space-y-1.5">
            <ButtonsTheme />
            <ButtonsTranslate />
          </div>
          <button onClick={closeMoreOptions} type="button">
            <IoClose size={35} className="hover:text-blue-700 text-blue-900" />
          </button>
        </div>
      )}
    </>
  );
}

export default Options;
