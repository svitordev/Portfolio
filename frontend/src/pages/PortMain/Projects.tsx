import ProjectBox from "../../components/ProjectBox";
import { projectsItems } from "../../data/projects";
function Projects() {
  return (
    <section
      id="projects"
      className="w-full py-16 font-condensed text-base text-justify flex items-center justify-center flex-col space-y-10"
    >
      <h2 className="text-5xl bg-custom-gradient bg-clip-text text-transparent">
        Meus Projetos
      </h2>
      {projectsItems.map((item) => (
        <ProjectBox key={item.title} item={item} />
      ))}
    </section>
  );
}

export default Projects;
