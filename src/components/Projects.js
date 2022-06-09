
import ProjectCard from "./ProjectCard";
import {ProjectData} from '../Data/ProjectsData'

const Projects = () => {
 
  return (
    <section id="projects" className="">
      <h1 className="text-3xl text-center text-white mb-20">My Projects</h1>
      <div className="grid grid-cols-3  gap-5">
        {ProjectData.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
