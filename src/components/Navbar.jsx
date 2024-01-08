import React, { useState } from "react";
import Logo from "../assets/mfmpizza.png";
import { Link, NavLink } from "react-router-dom";
import { IoReorderFourSharp } from "react-icons/io5";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar w-full flex items-center py-5 fixed top-0 z-20">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
          <Link to="/mfmPizza/"><img
            src={Logo}
            alt="logo"
            className="h-[3rem] mr-[10rem]"
          />
          </Link>
        <div className="hiddenLinks">
          <Link to="/mfmPizza/"> Home </Link>
          <Link to="/mfmPizza/menu"> Menu </Link>
          <Link to="/mfmPizza/about"> About </Link>
          <Link to="/mfmPizza/contact"> Contact </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/mfmPizza/"> Home </Link>
        <Link to="/mfmPizza/menu"> Menu </Link>
        <Link to="/mfmPizza/about"> About </Link>
        <Link to="/mfmPizza/contact"> Contact </Link>
        <button className="md:hidden" onClick={toggleNavbar}>
          <IoReorderFourSharp />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
