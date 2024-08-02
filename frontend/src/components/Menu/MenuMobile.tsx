import { useState } from "react";
import { HiMenuAlt3,HiMenuAlt1  } from "react-icons/hi";
import LinkMenu from "../Links";
import ButtonCV from "../ButtonCV";

function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const openCloseMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  return (
    <div className="relative flex items-center gap-5">
      <ButtonCV height="mob" />
      <button onClick={openCloseMenu} className="">
        {isOpen ? <HiMenuAlt1 size={35} /> : <HiMenuAlt3 size={35} />}
      </button>
      {isOpen && (
        <nav className="absolute font-bold font-condensed py-6 w-40 dark:bg-neutral-800 bg-neutral-200 -right-6 top-16 rounded-xl transition delay-200 duration-200 ease-in-out">
          <ul className="gap-4 flex flex-col items-center">
            <LinkMenu href="#home">HOME</LinkMenu>
            <LinkMenu href="#aboutme">SOBRE</LinkMenu>
            <LinkMenu href="#projects">PROJETOS</LinkMenu>
            <LinkMenu href="#contacts">CONTATO</LinkMenu>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default MenuMobile;
