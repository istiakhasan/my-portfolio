import React from "react";
import { useParams } from "react-router-dom";
import { ProjectData } from "../Data/ProjectsData.js";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ProjectDetails = () => {
  const { id } = useParams();
  const singleProject = ProjectData.find((pd) => pd.id === +id);

  return (
    <div>
      <div className="grid lg:grid-cols-2  lg:gap-5 lg:mt-32 mt-10 ">
        <div>
          <div className="w-[90%] mx-auto">
            <ImageGallery items={singleProject.images} />
          </div>
        </div>
        <div className="mt-10 lg:mt-0 mx-5 lg:mx-0">
          <p className="text-4xl text-gray-700 font-mono font-semibold">
            {singleProject.name}
            <span className="text-xl font-normal">
              ({singleProject.subtitle})
            </span>
          </p>
          <p className="font-semibold text-gray-700 text-mono mt-3 text-2xl">
            Technology usages:
          </p>
          <p className="font-semibold text-md">{singleProject.technology}</p>
          <p className="text-2xl text-gray-700 font-mono font-semibold mt-3">
            Features:
          </p>
          <p className="whitespace-pre-line text-mono text-md text-gray-700">
            {singleProject.features}
          </p>
          <div className="mt-6">
            <a
              href={singleProject.livesite}
              target="_blank"
              className="btn btn-xs bg-blue-700 text-xs border-none text-white font-bold hover:bg-blue-600 mr-3"
            >
              Preview
            </a>
            {singleProject.clientCode && (
              <a
                href={singleProject.clientCode}
                target="_blank"
                className="btn btn-xs bg-blue-700 text-xs border-none text-white font-bold hover:bg-blue-600 mr-3"
              >
                Client Side Code
              </a>
            )}
            {singleProject.serverCode && (
              <a
                href={singleProject.serverCode}
                target="_blank"
                className="btn btn-xs mt-2 lg:mt-0 bg-blue-700 text-xs border-none text-white font-bold hover:bg-blue-600 mr-3"
              >
                Server side Code
              </a>
            )}
          </div>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
