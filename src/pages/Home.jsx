import React from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";
import PizzaCanvas from "../canvas/PizzaCanvas";
import { slideAnimation } from "../helpers/motion";

function Home() {
  return (
    <div className="home w-full " style={{ backgroundImage: `url(${BannerImage})`  }}>
      <motion.div {...slideAnimation("left")} className="headerContainer">
        <h1> MFM's Pizzeria </h1>
        <p> PIZZA TO FIT ANY TASTE</p>
        <Link to="/mfmPizza/menu">
          <button> ORDER NOW </button>
        </Link>
      </motion.div>
      <motion.div {...slideAnimation("up")} className="pizza">
        <PizzaCanvas/>
      </motion.div>
    </div>
  );
}

export default Home;
