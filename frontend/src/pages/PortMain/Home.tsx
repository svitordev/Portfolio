import { useContext, useEffect, useRef } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { ThemeContext } from "../../App";
import homeDark from "../../assets/img/structure/homeDark.png";
import homeLight from "../../assets/img/structure/homeLight.png";
import BoxSocial from "../../components/BoxSociais";
import {
  AnimationBottom,
  AnimationLeft,
  AnimationRight,
} from "../../hooks/animation";
import {
  ResetAnimationBottom,
  ResetAnimationLeft,
  ResetAnimationRight,
} from "../../hooks/resetAnimation";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import gsap from "gsap";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Home deve ser usado dentro de um ThemeContext.Provider");
  }
  const { theme } = context;

  const imgRef = useRef<null>(null);
  const boxRef = useRef<null>(null);
  const boxTextRef = useRef<null>(null);
  const p1Ref = useRef<null>(null);
  const p2Ref = useRef<null>(null);
  const tituloRef = useRef<null>(null);

  // Configuração dos observadores
  useIntersectionObserver({
    elements: imgRef,
    animate: AnimationRight,
    reset: ResetAnimationRight,
  });
  useIntersectionObserver({
    elements: tituloRef,
    animate: AnimationLeft,
    reset: ResetAnimationLeft,
  });
  useIntersectionObserver({
    elements: p1Ref,
    animate: AnimationLeft,
    reset: ResetAnimationLeft,
  });
  useIntersectionObserver({
    elements: p2Ref,
    animate: AnimationLeft,
    reset: ResetAnimationLeft,
  });
  useIntersectionObserver({
    elements: boxRef,
    animate: AnimationBottom,
    reset: ResetAnimationBottom,
  });

  // Animações com GSAP
  useEffect(() => {
    const animations = [
      { ref: boxTextRef, x: -50 },
      { ref: imgRef, x: 50 },
      { ref: boxRef, y: 100, duration: 5 },
    ];

    for (const { ref, x = 0, y = 0, duration = 2 } of animations) {
      gsap.fromTo(
        ref.current,
        { duration, x, y, opacity: 0 },
        { x: 0, y: 0, opacity: 1 }
      );
    }
  }, []);
  return (
    <section
      id="home"
      className="pt-14 md:pt-[5.5rem] px-[10%] md:px-[5%] lg:px-[5%] xl:px-[10%] flex flex-col md:flex-row justify-between text-center md:text-start"
    >
      <div
        ref={boxTextRef}
        className="md:w-1/2 lg:w-3/5 my-16 space-y-2 flex flex-col justify-center"
      >
        <p ref={p1Ref} className="text-2xl font-condensedItalic">
          {t("home.p1")}
        </p>
        <h1
          ref={tituloRef}
          className="text-5xl font-condensed bg-custom-gradient bg-clip-text text-transparent uppercase "
        >
          {t("home.devFS")}
        </h1>
        <p ref={p2Ref} className="text-2xl font-condensedItalic lg:w-4/5">
          {t("home.p2")}
        </p>
        <div
          ref={boxRef}
          className="flex gap-4 pt-4 justify-center md:justify-start"
        >
          <BoxSocial href="https://www.linkedin.com/in/devsvitor/">
            <FaLinkedinIn />
          </BoxSocial>
          <BoxSocial href="https://github.com/svitordev">
            <TbBrandGithubFilled />
          </BoxSocial>
          <BoxSocial href="https://www.instagram.com/svitor.dev/">
            <AiFillInstagram />
          </BoxSocial>
        </div>
      </div>
      {theme === "dark" ? (
        <img
          ref={imgRef}
          src={homeDark}
          alt="Ilustração tema escuro"
          className="md:w-3/5 xl:w-2/5 rounded-md  self-end"
        />
      ) : (
        <img
          ref={imgRef}
          src={homeLight}
          alt="Ilustração tema claro"
          className="md:w-3/5 xl:w-[35.5%] rounded-md self-end"
        />
      )}
    </section>
  );
}

export default Home;
