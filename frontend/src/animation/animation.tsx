import gsap from "gsap";

const AnimationBottom = (element: gsap.TweenTarget) => {
  gsap.to(element, { duration: 1, y: 0, opacity: 1 });
  return null;
};
const AnimationLeft = (element: gsap.TweenTarget) => {
  gsap.to(element, { duration: 1, x: 0, opacity: 1 });
  return null;
};
const AnimationRight = (element: gsap.TweenTarget) => {
  gsap.to(element, { duration: 1, x: 0, opacity: 1 });
  return null;
};
const AnimationTitulo = (element: gsap.TweenTarget) => {
  gsap.to(element, { duration: 1, y: 0, opacity: 1 });
  return null;
};
export { AnimationBottom, AnimationLeft, AnimationRight, AnimationTitulo };