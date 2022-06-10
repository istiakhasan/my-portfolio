import React, { useEffect } from "react";
import AboutImage from "../images/istiak.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-up" id="about" className="my-20">
      <h1 className="text-4xl text-primary text-center font-bold mb-16">
        About Me
      </h1>
      {/* about image  container */}
      <div className="grid lg:grid-cols-2 mt-5 pt-5 gy-5 ">
        <div className=" flex  justify-center">
          <img
            className="lg:h-[50vh] h-[30vh] w-[70%] object-cover border-primary border-4 p-2 rounded"
            src={AboutImage}
            alt=""
          />
        </div>
        {/* about description container */}
        <div className=" pt-3 rounded-3 pb-5 mx-4 lg:mx-0 mt-5 lg:mt-0 px-3 bg-white">
          <h3 className="text-2xl font-semibold font-mono">Istiak Hasan</h3>
          <div className="d-flex align-items-center justify-content-between">
            <h5 className="font-semibold text-sm">Web Developer</h5>
            <div className="flex-grow-1 ">
              <hr className=" bg-gradient-to-r from-primary to-[#c4a39a] h-[5px] w-[100%]" />
            </div>
          </div>
          <p className="text-lg mt-3  text-gray-600">
            A front-end developer with over 2 yearsof experience in designing
            and developing user interfaces, testing and debugging. Learning
            Something new and improving my knowledge, skills and abilities are
            my main focus. To work as part of a dynamic, team where there is an
            opportunity to make significant contribution along with developing
            personal skills. I always look forward to new challenges and
            experiences. I have ability to learn anything very quickly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
