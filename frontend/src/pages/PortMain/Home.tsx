import gsap from "gsap";
import { useEffect, useRef } from "react";
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
  const imgRef = useRef(null);
  const boxRef = useRef(null);
  const BoxText = useRef(null);
  const p1 = useRef(null);
  const p2 = useRef(null);
  const titulo = useRef(null);
useIntersectionObserver({
  elements: imgRef,
  animate: AnimationRight,
  reset: ResetAnimationRight,
});
useIntersectionObserver({
  elements: titulo,
  animate: AnimationLeft,
  reset: ResetAnimationLeft,
});
useIntersectionObserver({
  elements: p1,
  animate: AnimationLeft,
  reset: ResetAnimationLeft,
});
useIntersectionObserver({
  elements: p2,
  animate: AnimationLeft,
  reset: ResetAnimationLeft,
});
  useIntersectionObserver({
    elements: boxRef,
    animate: AnimationBottom,
    reset: ResetAnimationBottom,
  });

  useEffect(() => {
    gsap.fromTo(
      BoxText.current,
      {
        duration: 2,
        x: -50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
      }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      {
        duration: 2,
        x: 50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
      }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      {
        duration: 5,
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
      }
    );
  }, []);
  return (
    <section
      id="home"
      className="pt-14 md:pt-[5.5rem] px-[10%] flex flex-col md:flex-row justify-between text-center md:text-start"
    >
      <div ref={BoxText} className="md:w-3/5 my-16 space-y-2 flex flex-col justify-center">
        <p ref={p1} className="text-2xl font-condensedItalic">
          Precisa de um
        </p>
        <h1 ref={titulo} className="text-5xl font-condensed bg-custom-gradient bg-clip-text text-transparent">
          Desenvolvedor Front End
        </h1>
        <p ref={p2} className="text-2xl font-condensedItalic lg:w-3/5">
          Para transformar suas ideias em experiências incríveis?
        </p>
        <div
          ref={boxRef}
          className="flex gap-4 pt-4 justify-center md:justify-start"
        >
          <BoxSocial href="https://www.linkedin.com/in/devsvitor/">
            <FaLinkedinIn />
          </BoxSocial>
          <BoxSocial href="https://github.com/VTEXsx">
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
          alt=""
          className="md:w-2/5 rounded-md  self-end"
        />
      ) : (
        <img
          ref={imgRef}
          src={homeLight}
          alt=""
          className="md:w-2/5 rounded-md self-end"
        />
      )}
    </section>
  );
}

export default Home;
