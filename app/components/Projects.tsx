import MotionWrapper from "@/utils/MotionWrapper";
import TiltCard from "./TiltCard";
import { projects } from "@/constants";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full mb-36 md:mb-0 h-max flex flex-col items-center justify-center px-20 mt-20 pt-20 font-mono gap-1">
      <h2 className="md:text-4xl text-2xl text-center font-bold text-white mb-5">
        Projects
      </h2>
      {projects.map((project, index) => (
        <MotionWrapper duration={0.5} key={index}>
          <TiltCard
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
            image={project.image}
          />
        </MotionWrapper>
      ))}
    </div>
  );
};

export default Projects;
