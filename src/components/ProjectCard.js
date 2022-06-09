import React, { useState } from 'react';

const ProjectCard = ({project}) => {
    const [details,setDetails]=useState(false)
    return (
        <div class="card h-fit   shadow-xl">
         <div className='w-[90%] mx-auto bg-base-100 rounded-lg'>
         <figure class="px-3 pt-3">
            <img style={{height:"25vh",objectFit:"cover",width:"100%"}} className=' ' src={project.img} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center ">
            <h2 class="card-title">{project.name}</h2>
            {
                details&&<>
                  <div>
                      <p className='font-bold text-sm'>Technology: <span className='text-xs font-[600] text-slate-700'>{project.technology}</span></p>
                      <p className='font-bold text-sm'>Features:</p>
                      <p className='whitespace-pre-line font-semibold text-xs text-slate-500'>{project.features}</p>
                      <div className='my-3'>

                      <a target={"_blank"} href={project.livesite} className='btn btn-xs mr-3 bg-blue-600 border-none hover:bg-blue-900  normal-case'>Visit Site</a>
                     {project.clientCode && <a target="_blank" href={project.clientCode} className='btn btn-xs mr-3 bg-blue-600 border-none hover:bg-blue-900 normal-case'>Client Site Code</a>}
                     {project.serverCode && <a target="_blank" href={project.serverCode} className='btn btn-xs mr-3 bg-blue-600 border-none hover:bg-blue-900  normal-case'>Server Site Code</a>}
                      </div>
                  </div>
                </>
            }
            
            <div class="card-actions">
              <button onClick={()=>setDetails(!details)} className="btn btn-primary btn-sm">Details</button>
            </div>
          </div>
         </div>
        </div>
    );
};

export default ProjectCard;