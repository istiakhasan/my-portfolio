import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-up" id="skill" className="">
      <h1 className="text-primary font-bold  text-center text-4xl my-20">
        My Skills
      </h1>
      <div className="lg:grid grid-cols-2 gap-5">
        <div data-aos="fade-up">
          <div className="w-[70%] mx-auto lg:mx-0">
            <p className="text-slate-900 font-semibold mb-2">JavaScript</p>
            <div className="w-full mb-5 bg-gray-200 rounded-full dark:bg-gray-700 ">
              <div className="bg-red-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[85%]">
                {" "}
                85%
              </div>
            </div>
            <p className="text-slate-900 font-semibold mb-2">Next Js</p>
            <div className="w-full mb-5 bg-gray-200 rounded-full dark:bg-red-700 ">
              <div className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[95%]">
                {" "}
                90%
              </div>
            </div>
            <p className="text-slate-900 font-semibold mb-2">React</p>
            <div className="w-full mb-5 bg-gray-200 rounded-full dark:bg-gray-700 ">
              <div className="bg-slate-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[95%]">
                {" "}
                95%
              </div>
            </div>
            <p className="text-slate-900 font-semibold mb-2">TypeScript</p>
            <div className="w-full mb-5 bg-gray-200 rounded-full dark:bg-gray-700 ">
              <div className="bg-green-700 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[95%]">
                {" "}
                75%
              </div>
            </div>
            <p className="text-slate-900 font-semibold mb-2">Redux & Redux RTK Query</p>
            <div className="w-full mb-5 bg-gray-200 rounded-full dark:bg-gray-700 ">
              <div className="bg-slate-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[95%]">
                {" "}
                80%
              </div>
            </div>
            <p className="text-slate-900 font-semibold mb-2">Express</p>
            <div className="w-full mb-5 bg-gray-200 rounded-full dark:bg-gray-700 ">
              <div className="bg-yellow-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[95%]">
                {" "}
                80%
              </div>
            </div>
            <p className="text-slate-900 font-semibold mb-2">NodeJs</p>
            <div className="w-full mb-5 bg-gray-200 rounded-full dark:bg-gray-700 ">
              <div className="bg-orange-800 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[60%]">
                {" "}
                60%
              </div>
            </div>
            <p className="text-slate-900 font-semibold mb-2">MongoDB</p>
            <div className="w-full mb-5 bg-gray-200 rounded-full dark:bg-gray-700 ">
              <div className="bg-emerald-800 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[80%]">
                {" "}
                80%
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-up">
          <div className="w-[70%] mx-auto">
            <p className="text-slate-900 font-semibold mb-2">Prisma</p>
            <div className="w-full mb-5 bg-gray-200 rounded-full dark:bg-gray-700 ">
              <div className="bg-teal-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[100%]">
                {" "}
                90%
              </div>
            </div>
            <p className="text-slate-900 font-semibold mb-2">Postgresql</p>
            <div className="w-full mb-5 bg-gray-200 rounded-full dark:bg-gray-700 ">
              <div className="bg-emerald-900 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[100%]">
                {" "}
                80%
              </div>
            </div>
            <p className="text-slate-900 font-semibold mb-2">Mysql</p>
            <div className="w-full mb-5 bg-gray-200 rounded-full dark:bg-gray-700 ">
              <div className="bg-[#594292dd] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[60%]">
                {" "}
                60%
              </div>
            </div>
            <p className="text-slate-900 font-semibold mb-2">Firebase</p>
            <div className="w-full mb-5 bg-gray-200 rounded-full dark:bg-gray-700 ">
              <div className="bg-[#9c3457dd] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[80%]">
                {" "}
                80%
              </div>
            </div>
            <p className="text-slate-900 font-semibold mb-2">HTML5</p>
            <div className="w-full mb-5 bg-gray-200 rounded-full dark:bg-gray-700 ">
              <div className="bg-cyan-300 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[95%]">
                {" "}
                95%
              </div>
            </div>
            <p className="text-slate-900 font-semibold mb-2">CSS3</p>
            <div className="w-full mb-5 bg-gray-200 rounded-full dark:bg-gray-700 ">
              <div className="bg-[#2c2cacdd] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[100%]">
                {" "}
                100%
              </div>
            </div>
           
            <p className="text-slate-900 font-semibold mb-2">PHP</p>
            <div className="w-full mb-5 bg-gray-200 rounded-full dark:bg-gray-700 ">
              <div className="bg-[#115218dd] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[60%]">
                {" "}
                60%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
