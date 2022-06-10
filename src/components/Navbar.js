import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const menuElement = (
    <>
      <li className="mr-6 font-bold font-mono">
        <HashLink to="/#home">Home</HashLink>
      </li>
      <li className="mr-6 font-bold font-mono">
        <HashLink to="/#about">About</HashLink>
      </li>
      <li className="mr-6 font-bold font-mono">
        <HashLink to="/#skill">Skill</HashLink>
      </li>
      <li className="mr-6 font-bold font-mono">
        <HashLink to="/#projects">Project</HashLink>
      </li>
      <li className="mr-6 font-bold font-mono">
        <Link to="/blog">Blog</Link>
      </li>
      <li className="mr-6 font-bold font-mono">
        <HashLink to="/#contact">Contact</HashLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 bg-[#F85023] z-50 lg:px-32">
      <div className="navbar text-white  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-primary font-semibold "
            >
              {menuElement}

              {/* here */}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl ml-20 lg:ml-0"
          >
            𝓘 Web
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0 ">
            {menuElement}
            {/* here */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
