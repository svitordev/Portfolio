import Tag from "../Tags";
import { ProjectsProp } from "../../data/projects";
interface ProjectProps {
  item: ProjectsProp;
}
const ProjectBox: React.FC<ProjectProps> = ({ item }) => {
  return (
    <div className="w-4/5  flex justify-between">
      <div className="w-[48%] space-y-4">
        <img
          src={item.img}
          alt=""
          className="w-full  border-2 hover:border-slate-400 border-slate-300 dark:border-neutral-800 dark:hover:border-neutral-500  rounded-2xl shadow-lg dark:shadow-black shadow-slate-200"
        />
        <div className="w-full flex flex-col items-start justify-start space-y-3">
          <div className="flex gap-2 flex-wrap">
            {item.tecnologias.map((tecs)=>(
              <Tag>{tecs}</Tag>
            ))}
          </div>
          <h3 className="text-2xl">{item.title}</h3>
          <p>
            {item.about}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
