import { ComponentProps, ReactNode } from "react";
import { VariantProps, tv } from "tailwind-variants";
const linkVariants = tv({
  base: "border-2 hover:border-blue-600 text-base hover:bg-white  hover:text-blue-600 text-blue-800 border-blue-800 rounded-full  py-2 bg-slate-100  font-condensed shadow-md dark:shadow-black shadow-slate-300 transition delay-100 ease-linear",
  variants: {
    size: {
      default: "px-6",
      full: "px-14",
    },
  },

  defaultVariants: {
    size: "default",
  },
});
interface LinkProps
  extends ComponentProps<"a">,
    VariantProps<typeof linkVariants> {
  children: ReactNode;
}
function ButtonCV({  children,size, ...props }: LinkProps) {
  return (
    <a href="#"{...props} className={linkVariants({size})}>
      {children}
    </a>
  );
}

export default ButtonCV;
