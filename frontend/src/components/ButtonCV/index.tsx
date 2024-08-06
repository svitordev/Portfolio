interface LinkProps {
  height?: string;
}
function ButtonCV({ height }: LinkProps) {
  return (
    <a
      href="/curriculo_vitor.pdf"
      download="devFrontendVitorSilvaCV.pdf"
      className={`${height === "full" ? "w-48" : ""} ${
        height === "micro" ? "w-36" : ""
      } ${
        height === "mob" ? "px-4" : ""
      } border-2 hover:border-blue-600 text-base hover:bg-white  hover:text-blue-600 text-blue-800 border-blue-800 rounded-full  py-2 bg-slate-100  font-condensed shadow-md dark:shadow-black shadow-slate-300 transition delay-100 ease-linear flex justify-center flex-shrink-0`}
    >
      BAIXAR CV
    </a>
  );
}

export default ButtonCV;
