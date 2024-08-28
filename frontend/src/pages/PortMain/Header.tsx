import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import logo from "../../assets/img/structure/sVitorDev.png";
import Menu from "../../components/Menu/Menu";
import MenuMobile from "../../components/Menu/MenuMobile";
function Header() {
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection: string | null = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          currentSection = section.getAttribute("id");
        }
      });
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const width = window.innerWidth;
  const boxRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      {
        duration: 1,
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
      }
    );
  }, []);
  return (
    <header className="w-full pt-6 pb-2 dark:bg-neutral-900/80 bg-slate-50/90 fixed top-0 z-50">
      <div
        ref={boxRef}
        className="dark:bg-neutral-800 bg-neutral-200 rounded-3xl h-16 flex items-center justify-between  top-6   inset-x-0 mx-auto shadow-md dark:shadow-neutral-950 shadow-slate-300 w-[95%] lg:w-4/5 px-6 lg:px-12"
      >
        <a className="h-full  items-center inline-flex" href="#home">
          <img src={logo} alt="logo sVitor.Dev" className="h-4/5" />
        </a>
        {width > 767 ? (
          <Menu activeSection={activeSection} />
        ) : (
          <div>
            <MenuMobile activeSection={activeSection} />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
