interface LinkProps {
  height?: string;
}
function ButtonCV({ height }: LinkProps) {
  return (
    <a
      href="#"
      className={`${
        height === "full" ? "px-14" : "px-8"
      } border-2 hover:border-blue-600 text-base hover:bg-white  hover:text-blue-600 text-blue-800 border-blue-800 rounded-full  py-2 bg-slate-100  font-condensed shadow-md dark:shadow-black shadow-slate-300 transition delay-100 ease-linear`}
    >
      BAIXAR CV
    </a>
  );
}

export default ButtonCV;
