import React from "react";
import { motion } from 'framer-motion';

import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";
import { headTextAnimation, slideAnimation } from "../helpers/motion";

function Contact() {
  return (
    <div className="contact">
      <motion.div
        {...slideAnimation('left')}
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></motion.div>
      <div className="rightSide">
        <motion.h1 {...headTextAnimation}> Contact Us</motion.h1>

        <motion.form {...slideAnimation("up")} id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </motion.form>
      </div>
    </div>
  );
}

export default Contact;
