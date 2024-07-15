import logo from "../../assets/img/sVitor.Dev.svg";
import Menu from "../Menu";
function Header() {
  return (
    <header className="w-4/5 dark:bg-slate-200/5 bg-slate-300/30 rounded-3xl h-16 flex items-center justify-between px-12 top-6  fixed inset-x-0 mx-auto shadow-md dark:shadow-neutral-950 shadow-slate-00">
      <img
        src={logo}
        alt="logo sVitor.Dev"
        className="h-4/5 text-neutral-700 dark:text-slate-200"
      />
      <Menu />
    </header>
  );
}

export default Header;
