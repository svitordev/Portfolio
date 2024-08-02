import logo from "../../assets/img/structure/sVitor.Dev.png";
import Menu from "../../components/Menu/Menu";
import MenuMobile from "../../components/Menu/MenuMobile";
function Header() {
  const width = window.innerWidth;
  return (
    <header className="w-full pt-6 pb-2 dark:bg-neutral-900/80 bg-slate-50/90 fixed top-0 z-50">
      <div className="dark:bg-neutral-800 bg-neutral-200 rounded-3xl h-16 flex items-center justify-between  top-6   inset-x-0 mx-auto shadow-md dark:shadow-neutral-950 shadow-slate-300 w-[95%] lg:w-4/5 px-6 lg:px-12">
        <img src={logo} alt="logo sVitor.Dev" className="h-4/5" />
        {width > 767 ? <Menu /> : <div><MenuMobile/></div>}
      </div>
    </header>
  );
}

export default Header;
