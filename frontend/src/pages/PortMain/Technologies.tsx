import gsap from "gsap";
import { useEffect, useRef } from "react";
import TecGroup from "../../components/TecGroup";

import { v4 as uuidv4 } from 'uuid';

function Technologies() {
  const boxRef = useRef(null);
  useEffect(() => {
    if (boxRef.current) {
      gsap.to(boxRef.current, {
        backgroundPosition: "0% 50%",
        ease: "linear",
        repeat: -1,
      });
    }
  }, []);

  const tecGroupIds = Array(4).fill(null).map(() => uuidv4());

  return (
    <section
      ref={boxRef}
      className="bg-custom-linear-gradient bg-[length:200%_300%] w-full h-16 md:h-20 flex items-center"
    >
      <div className="h-[3.8rem] md:h-[4.6rem] dark:bg-neutral-900 bg-slate-50 flex gap-5 overflow-hidden">
        {tecGroupIds.map((id) => (
          <TecGroup key={id} />
        ))}
      </div>
    </section>
  );
}

export default Technologies;
