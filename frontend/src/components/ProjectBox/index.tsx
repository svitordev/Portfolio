import { useRef } from "react";
import { AnimationBottom } from "../../animation/animation";
import { ResetAnimationBottom } from "../../animation/resetAnimation";
import { ProjectsProp } from "../../data/projects";
import useIntersectionObserver from "../../intersection";
import Tag from "../Tags";
interface ProjectProps {
  item: ProjectsProp;
}
const ProjectBox: React.FC<ProjectProps> = ({ item }) => {
  const boxRef = useRef(null);
  const element = boxRef.current;
  useIntersectionObserver({element, animate: AnimationBottom, reset: ResetAnimationBottom});
  const par = item.id % 2;
  return (
    <div
      ref={boxRef}
      className={`w-full flex flex-col md:flex-row text-center md:text-start gap-5 ${
        par === 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      <video
        className="md:w-[45%] h-full  border-2 hover:border-slate-400 border-slate-300 dark:border-neutral-800 dark:hover:border-neutral-500  rounded-2xl shadow-lg shadow-gray-400 dark:shadow-gray-800"
        controls
      >
        <source src={item.src} type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>

      <div className="w-full flex flex-col md:items-start md:justify-start space-y-3">
        <h3 className="text-2xl">{item.title}</h3>
        <p>{item.about}</p>
        <div className="flex gap-2 flex-wrap justify-center md:justify-start">
          {item.tecnologias.map((tecs, index) => (
            <Tag key={index}>{tecs}</Tag>
          ))}
        </div>
        <div className="flex gap-2 flex-wrap justify-center">
          {item.deploy && (
            <a
              href={item.deploy}
              target="_blank"
              rel="noreferrer"
              className="border-2 border-orange-500 hover:bg-blue-600 hover:border-gray-300 hover:text-slate-50  px-4 py-2 rounded-lg text-sm"
            >
              Deploy
            </a>
          )}
          {item.repositorio && (
            <a
              href={item.repositorio}
              target="_blank"
              rel="noreferrer"
              className="border-2 border-orange-500 hover:bg-blue-600 hover:border-gray-300 hover:text-slate-50 px-4 py-2 rounded-lg text-sm "
            >
              Repositório
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
