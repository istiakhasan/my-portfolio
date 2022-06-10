import ProjectCard from "./ProjectCard";
import { ProjectData } from "../Data/ProjectsData";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section data-aos="fade-up" id="projects" className="">
      <h1 className="text-4xl font-bold text-center text-primary mb-20 mt-10 lg:mt-0">
        My Projects
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-10">
        {ProjectData.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
