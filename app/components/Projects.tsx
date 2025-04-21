import TiltCard from "./TiltCard";
import { projects } from "@/constants";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full h-max flex flex-col items-center justify-center px-20 mt-40 pt-20 font-mono gap-1">
      <h2 className="md:text-4xl text-2xl text-center font-bold text-white mb-5">
        Projects
      </h2>
      {projects.map((project, index) => (
        <TiltCard
          key={index}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          link={project.link}
          image={project.image}
        />
      ))}
    </div>
  );
};

export default Projects;
