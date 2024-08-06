import gsap from "gsap";
import { AnimationProps } from "./animation";
const ResetAnimationBottom = ({ element }: AnimationProps) => {
  gsap.to(element, { duration: 1, y: 80, opacity: 0 });
};
const ResetAnimationTitulo = ({ element }: AnimationProps) => {
  gsap.to(element, { duration: 1, y: -50, opacity: 0 });
};
const ResetAnimationLeft = ({ element }: AnimationProps) => {
  gsap.to(element, { duration: 1, x: -100, opacity: 0 });
};
const ResetAnimationRight = ({ element }: AnimationProps) => {
  gsap.to(element, { duration: 1, x: 100, opacity: 0 });
};
export { ResetAnimationBottom, ResetAnimationLeft, ResetAnimationRight, ResetAnimationTitulo };