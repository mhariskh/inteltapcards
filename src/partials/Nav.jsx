import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAtlassian } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import imageNavbar from "../images/logo-in-gold.png";
import { CartState } from "../context/Context";
import "./cartStyles.css";
const Nav = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();
  const Links = [
    { name: "Home", link: "/" },
    { name: "Product", link: "/" },
    { name: "Shop", link: "#shop" },
    { name: "Benefits", link: "/" },
    { name: "Features", link: "/" },
    { name: "Contact Us", link: "/cart" },
  ];

  const [Open, setOpen] = useState(false);
  const [cartDropDown, setCartDropDown] = useState(false);

  return (
    <div className="fixed w-full z-30 bg-white backdrop-blur-sm shadow-lg md:shadow-sm top-0 left-0 w-full">
      <div
        className=" md:flex bg-white text-black   items-center justify-between  md:px-5 px-7"
        style={{ paddingTop: "30px", paddingBottom: "30px" }}
      >
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
          className={`md:flex md:items-center md:pb-0 pb-5 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-7 transition-all duration-500 ease-in  ${
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

          <li key="cart" className="md:ml-8 text-xl md:my-0 my-6">
            <Link to="/cart">
              <i class="fa fa-shopping-cart fa-2x"></i>
              <span class="ml-5">{cart.length}</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
