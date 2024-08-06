import gsap from "gsap";
export interface AnimationProps {
 element: HTMLElement;
}
const AnimationBottom = ({element}: AnimationProps) => {
 gsap.to(element, { duration: 1, y: 0, opacity: 1 });
 return null;
}
const AnimationLeft = ({element}: AnimationProps) => {
 gsap.to(element, { duration: 1, x: 0, opacity: 1 });
 return null;
}
const AnimationRight = ({element}: AnimationProps) => {
 gsap.to(element, { duration: 1, x: 0, opacity: 1 });
 return null;
}
const AnimationTitulo = ({element}: AnimationProps) => {
 gsap.to(element, { duration: 1, y: 0, opacity: 1 });
 return null;
}
export { AnimationBottom, AnimationLeft, AnimationRight, AnimationTitulo };