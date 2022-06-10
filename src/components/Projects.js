
import ProjectCard from "./ProjectCard";
import {ProjectData} from '../Data/ProjectsData'

const Projects = () => {
 
  return (
    <section id="projects" className="">
      <h1 className="text-4xl font-bold text-center text-primary mb-20 mt-10 lg:mt-0" >My Projects</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-5">
        {ProjectData.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
