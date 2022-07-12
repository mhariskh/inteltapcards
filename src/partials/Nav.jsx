import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAtlassian } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import imageNavbar from "../images/logo-in-gold.png";

const Nav = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "Service", link: "/" },
    { name: "About", link: "/" },
    { name: "Blog", link: "/" },
    { name: "Contact", link: "/" },
  ];

  const [Open, setOpen] = useState(false);

  return (
    <div className="fixed w-full z-30 bg-white backdrop-blur-sm shadow-lg md:shadow-sm top-0 left-0 w-full">
      <div className=" md:flex bg-[#f3f3f3] text-black   items-center justify-between py-8 md:px-5 px-7">
        <div className="font-bold ml-4 text-2xl cursor-pointer flex items-center font-sans">
          <p className="text-3xl mr-2"></p>
          <img src={imageNavbar} alt="bug" height={50} width={150} />
        </div>
        <div
          onClick={() => setOpen(!Open)}
          className="z-30 bg-white backdrop-blur-sm shadow-lg text-3xl absolute right-8 top-4 cursor-pointer md:hidden"
        >
          <FontAwesomeIcon icon={Open ? faXmark : faBars} />
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-5 absolute md:static bg-[#f3f3f3] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-7 transition-all duration-500 ease-in  ${
            Open
              ? "top-16 opacity-100 bg-white"
              : "top-[-490px] md:opacity-100 opacity-0"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-6">
              <a href={link.link} className="hover:text-gray-500 duration-100">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
