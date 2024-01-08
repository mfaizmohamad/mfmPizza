import React from "react";

import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FaInstagram  /> 
        <FaTwitter />
         <FaFacebook /> 
         <FaLinkedin  />
      </div>
      <p> &copy; 2024 MFMpizza.com</p>
    </div>
  );
}

export default Footer;
