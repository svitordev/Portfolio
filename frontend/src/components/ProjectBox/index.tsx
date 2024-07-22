import { ProjectsProp } from "../../data/projects";
import Tag from "../Tags";
interface ProjectProps {
  item: ProjectsProp;
}
const ProjectBox: React.FC<ProjectProps> = ({ item }) => {
  const par = item.id % 2;
  return (
    <div  className={`w-full  flex gap-5 ${par === 0 ? "flex-row-reverse":""}`}>
      <img
        src={item.img}
        alt=""
        className="w-[45%]  border-2 hover:border-slate-400 border-slate-300 dark:border-neutral-800 dark:hover:border-neutral-500  rounded-2xl shadow-lg dark:shadow-black shadow-slate-200"
      />
      <div className="w-full flex flex-col items-start justify-start space-y-3">
        <h3 className="text-2xl">{item.title}</h3>
        <p>{item.about}</p>
        <div className="flex gap-2 flex-wrap">
          {item.tecnologias.map((tecs) => (
            <Tag>{tecs}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
