import gsap from "gsap";
import { useEffect, useRef } from "react";
import { BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsLine } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";
function TecGroup() {
  const tecRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.to(tecRef.current, { duration: 100, x: -500, opacity: 1 });
  }, []);
  return (
    <div
      ref={tecRef}
      className="tecGroup w-full h-full flex items-center text-6xl gap-5 "
    >
      <FaHtml5 />
      <FaCss3Alt />
      <IoLogoJavascript />
      <BiLogoTypescript className="text-[4.3rem]" />
      <FaReact />
      <SiRedux />
      <BiLogoTailwindCss />
      <RiNextjsLine />
      <TbBrandVite />
    </div>
  );
}

export default TecGroup;
