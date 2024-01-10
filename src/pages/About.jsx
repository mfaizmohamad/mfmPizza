import React from "react";

import { motion } from 'framer-motion';

import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
import { fadeAnimation, headContentAnimation, headTextAnimation, slideAnimation } from "../helpers/motion";
function About() {
  return (
    <div className="about">
      <motion.div
        {...slideAnimation("down")}
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></motion.div>
      <div className="aboutBottom">
        <motion.h1 {...headTextAnimation}> ABOUT US</motion.h1>
        <motion.p {...headContentAnimation}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente
          officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
          cumque velit
        </motion.p>
      </div>
    </div>
  );
}

export default About;
