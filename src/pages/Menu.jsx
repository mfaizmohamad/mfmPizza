import React from "react";
import { MenuList } from "../helpers/MenuList";

import { motion } from 'framer-motion';

import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import { fadeAnimation, headTextAnimation } from "../helpers/motion";

function Menu() {
  return (
    <div className="menu">
      <motion.h1 {...headTextAnimation} className="menuTitle">Our Menu</motion.h1>
      <motion.div {...fadeAnimation} className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </motion.div>
    </div>
  );
}

export default Menu;
