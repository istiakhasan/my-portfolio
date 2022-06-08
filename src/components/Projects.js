import React from "react";

const Projects = () => {
  return (
    <section className="text-white ">
      <h1 className="text-3xl text-center">My Projects</h1>
      <div className="grid grid-cols-3  gap-5">
        {[...Array(5).keys()].map((card) => (
          <div class="card  bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions">
              <button class="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
