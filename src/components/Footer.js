import React from "react";
import { BsFacebook, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-primary text-neutral-content mt-10 px-32">
      <div className="items-center grid-flow-col">
        <p className="text-white font-mono">
          Copyright © 2022 - All right reserved
        </p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://www.instagram.com/istieak_hasan/" target="_blank">
          <img
            className="w-[24px] h-[24px]"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/640px-Instagram-Icon.png"
            alt=""
          />
        </a>
        <a href="https://www.facebook.com/Istieak/" target="_blank">
          <BsFacebook className="w-[24px] text-blue-500 bg-white rounded-full  h-[24px]" />
        </a>
        <a href="https://www.linkedin.com/in/istiak-hasan" target="_blank">
          <BsLinkedin className="w-[24px] text-[#0077B5]  h-[24px] bg-white" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
