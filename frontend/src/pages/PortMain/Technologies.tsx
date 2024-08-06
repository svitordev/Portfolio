import gsap from "gsap";
import { useEffect, useRef } from "react";
import TecGroup from "../../components/TecGroup";

function Technologies() {
  const boxRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (boxRef.current) {
      gsap.fromTo(boxRef.current, {
        backgroundPosition: "200% 50%",
      },{
        duration: 20,
        backgroundPosition: "0% 50%",
        ease: "linear",
        repeat: -1,
      });
    }
  }, []);
  return (
    <section
      ref={boxRef}
      className="bg-custom-linear-gradient bg-[length:200%_300%]  w-full h-16 md:h-20 flex items-center"
    >
      <div className="h-[3.8rem] md:h-[4.6rem] dark:bg-neutral-900 bg-slate-50 flex gap-5 overflow-hidden">
        <TecGroup/>
        <TecGroup/>
        <TecGroup/>
        <TecGroup/>
      </div>
    </section>
  );
}

export default Technologies;
