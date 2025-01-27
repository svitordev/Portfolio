import { useRef } from "react";
import { useTranslation } from "react-i18next";
import myPhoto from "../../assets/img/structure/MyPhoto.jpg";
import ButtonCV from "../../components/ButtonCV";
import { AnimationLeft, AnimationRight } from "../../hooks/animation";
import {
  ResetAnimationLeft,
  ResetAnimationRight,
} from "../../hooks/resetAnimation";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
const AboutMe: React.FC = () => {
  const { t } = useTranslation();
  const refs = {
    boxLeft: useRef(null),
    p1: useRef(null),
    p2: useRef(null),
    titulo: useRef(null),
  };

  // Usando um objeto para configurar as animações
  const animationConfig = [
    { ref: refs.boxLeft, animate: AnimationLeft, reset: ResetAnimationLeft },
    { ref: refs.p1, animate: AnimationRight, reset: ResetAnimationRight },
    { ref: refs.p2, animate: AnimationRight, reset: ResetAnimationRight },
    { ref: refs.titulo, animate: AnimationRight, reset: ResetAnimationRight },
  ];
  // Aplicando as animações
  for (const { ref, animate, reset } of animationConfig) {
    useIntersectionObserver({ elements: ref, animate, reset });
  }

  return (
    <section
      id="aboutme"
      className="w-full py-10 md:py-16 px-[10%] flex flex-col md:flex-row justify-between gap-8 items-center font-condensed text-xl text-justify border-b-[3px] border-blue-700"
    >
      <div
        ref={refs.boxLeft}
        className="w-4/5 md:w-2/5  flex flex-col space-y-6 items-center"
      >
        <img
          src={myPhoto}
          alt="Minha foto"
          className="w-full md:w-4/5 rounded-full"
        />
        <ButtonCV height="full" />
      </div>
      <div className="flex flex-col items-center md:items-end gap-4 md:w-3/5">
        <h2
          ref={refs.titulo}
          className="text-4xl md:text-5xl bg-custom-gradient bg-clip-text text-transparent uppercase"
        >
          {t("about.title")}
        </h2>

        <p ref={refs.p1} className="md:w-3/4">
          {t("about.p1")}
          <span className="text-blue-600">{t("about.spanTecs")}</span>
        </p>

        <p ref={refs.p2} className="md:w-3/4">
          {t("about.p2")}
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
