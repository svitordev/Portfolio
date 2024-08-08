import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import ProjectBox from "../../components/ProjectBox";
import { AllProjectsData } from "../../data/projects";
function PlusProjects() {
  return (
    <section
      id="projects"
      className="w-full pt-5 pb-20 md:pt-10 md:pb-20  font-condensed text-base text-justify flex items-center justify-center flex-col space-y-10"
    >
      <h2 className="text-4xl md:text-5xl bg-custom-gradient bg-clip-text text-transparent">
        Meus projetos
      </h2>
      <div className="w-4/5 space-y-16">
        {AllProjectsData.map((item) => (
          <ProjectBox key={item.id} item={item} />
        ))}
      </div>
      <Link
        to="/"
        className="fixed bottom-2 border-2 border-blue-600 py-2 px-8 rounded-lg flex items-center gap-2 bg-slate-50 dark:bg-neutral-800 hover:bg-custom-gradient dark:hover:border-slate-100 hover:border-slate-400 hover:text-slate-200 transition  duration-500 ease-linear"
      >
        Voltar <IoArrowBackCircleSharp />
      </Link>
    </section>
  );
}

export default PlusProjects;
