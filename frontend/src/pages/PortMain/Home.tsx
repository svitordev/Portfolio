import gsap from "gsap";
import { useEffect, useRef, useMemo } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { AnimationBottom, AnimationLeft, AnimationRight } from "../../animation/animation";
import { ResetAnimationBottom, ResetAnimationLeft, ResetAnimationRight } from "../../animation/resetAnimation";
import homeDark from "../../assets/img/structure/homeDark.png";
import homeLight from "../../assets/img/structure/homeLight.png";
import BoxSocial from "../../components/BoxSociais";
import useIntersectionObserver from "../../intersection";

interface HomeProp {
  theme: string | null;
}

function Home({ theme }: HomeProp) {
  const refs = useMemo(() => ({
    img: useRef(null),
    box: useRef(null),
    boxText: useRef(null),
    p1: useRef(null),
    p2: useRef(null),
    titulo: useRef(null),
  }), []);

  const observerConfigs = useMemo(() => [
    { ref: refs.img, animate: AnimationRight, reset: ResetAnimationRight },
    { ref: refs.titulo, animate: AnimationLeft, reset: ResetAnimationLeft },
    { ref: refs.p1, animate: AnimationLeft, reset: ResetAnimationLeft },
    { ref: refs.p2, animate: AnimationLeft, reset: ResetAnimationLeft },
    { ref: refs.box, animate: AnimationBottom, reset: ResetAnimationBottom },
  ], [refs]); 

  for (const config of observerConfigs) {
    useIntersectionObserver({
      elements: config.ref,
      animate: config.animate,
      reset: config.reset,
    });
  }

  useEffect(() => {
    const animations = [
      { ref: refs.boxText, x: -50 },
      { ref: refs.img, x: 50 },
      { ref: refs.box, y: 100, duration: 5 },
    ];

    for (const { ref, x = 0, y = 0, duration = 2 } of animations) {
      gsap.fromTo(
        ref.current,
        { duration, x, y, opacity: 0 },
        { x: 0, y: 0, opacity: 1 }
      );
    }
  }, [refs]); // Add refs to the dependency array

  return (
    <section
      id="home"
      className="pt-14 md:pt-[5.5rem] px-[10%] flex flex-col md:flex-row justify-between text-center md:text-start"
    >
      <div ref={refs.boxText} className="md:w-3/5 my-16 space-y-2 flex flex-col justify-center">
        <p ref={refs.p1} className="text-2xl font-condensedItalic">
          Precisa de um
        </p>
        <h1 ref={refs.titulo} className="text-5xl font-condensed bg-custom-gradient bg-clip-text text-transparent">
          Desenvolvedor Front End
        </h1>
        <p ref={refs.p2} className="text-2xl font-condensedItalic lg:w-3/5">
          Para transformar suas ideias em experiências incríveis?
        </p>
        <div
          ref={refs.box}
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
          ref={refs.img}
          src={homeDark}
          alt=""
          className="md:w-2/5 rounded-md  self-end"
        />
      ) : (
        <img
          ref={refs.img}
          src={homeLight}
          alt=""
          className="md:w-2/5 xl:w-[35.5%] rounded-md self-end"
        />
      )}
    </section>
  );
}

export default Home;
