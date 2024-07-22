import logo from "../../assets/img/structure/sVitor.Dev.png";
import Menu from "../../components/Menu/Menu";
function Header() {
  return (
    <header className="w-full pt-6 pb-2 dark:bg-neutral-900/80 bg-slate-50/90 fixed top-0">
      <div className="w-4/5 dark:bg-neutral-800 bg-neutral-200 rounded-3xl h-16 flex items-center justify-between px-12 top-6   inset-x-0 mx-auto shadow-md dark:shadow-neutral-950 shadow-slate-00">
        <img src={logo} alt="logo sVitor.Dev" className="h-4/5" />
        <Menu />
      </div>
    </header>
  );
}

export default Header;
