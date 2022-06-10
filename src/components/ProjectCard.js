import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectCard = ({ project }) => {
  const [details, setDetails] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div  className="card h-fit mx-3 lg:mx-0   project-card  ">
      <div data-aos="fade-in" className="w-[80%] border-red-300 border-2 shadow-xl  mx-auto bg-base-100 rounded-lg ">
        <figure className="px-3 pt-3">
          <img
            style={{ height: "25vh", objectFit: "cover", width: "100%" }}
            src={project.img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center ">
          <h2 className="card-title">{project.name}</h2>
          {details && (
            <>
              <div>
                <p className="font-bold text-sm">
                  Technology:{" "}
                  <span className="text-xs font-[600] text-slate-700">
                    {project.technology}
                  </span>
                </p>
                <p className="font-bold text-sm">Features:</p>
                <p className="whitespace-pre-line font-semibold text-xs text-slate-500">
                  {project.features}
                </p>
                <div className="my-3">
                  <a
                    target={"_blank"}
                    href={project.livesite}
                    className="btn btn-xs mr-3 bg-blue-600 border-none hover:bg-blue-900  normal-case"
                  >
                    Visit Site
                  </a>
                  {project.clientCode && (
                    <a
                      target="_blank"
                      href={project.clientCode}
                      className="btn btn-xs mr-3 bg-blue-600 border-none hover:bg-blue-900 normal-case"
                    >
                      Client Site Code
                    </a>
                  )}
                  {project.serverCode && (
                    <a
                      target="_blank"
                      href={project.serverCode}
                      className="btn btn-xs mr-3 bg-blue-600 border-none hover:bg-blue-900  normal-case"
                    >
                      Server Site Code
                    </a>
                  )}
                </div>
              </div>
            </>
          )}

          <div className="card-actions">
            <button
              onClick={() => setDetails(!details)}
              className={`btn text-xs  btn-sm ${
                details ? "btn-error" : "btn-primary"
              }`}
            >
              {details ? "See Less" : "see more"}
            </button>
            <button
              onClick={() => navigate(`project/${project.id}`)}
              className={`btn text-xs  btn-sm btn-primary  bg-orange-500`}
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
