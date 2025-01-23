import gsap from "gsap";
const ResetAnimationBottom = (element: gsap.TweenTarget) => {
  gsap.to(element, { duration: 1, y: 80, opacity: 0 });
};
const ResetAnimationTitulo = (element: gsap.TweenTarget) => {
  gsap.to(element, { duration: 1, y: -50, opacity: 0 });
};
const ResetAnimationLeft = (element: gsap.TweenTarget) => {
  gsap.to(element, { duration: 1, x: -30, opacity: 0 });
};
const ResetAnimationRight = (element: gsap.TweenTarget) => {
  gsap.to(element, { duration: 1, x: 30, opacity: 0 });
};
export { ResetAnimationBottom, ResetAnimationLeft, ResetAnimationRight, ResetAnimationTitulo };