import React, { useState } from "react";
import "./Navbar.scss";
import { Images } from "../../Constants/Index";
import { HiMenuAlt4, hiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={Images.logo} />
      </div>
      <ul className="app__navbar-links">
        {["Home", "About", "contact", "work", "Skills", "Testimonial"].map(
          (items) => (
            <li className="app__flex p-text" key={`link-${items}`}>
              <div />
              <a href={`#${items}`}>{items}</a>
            </li>
          )
        )}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
          >
            <HiX onClick={() => setToggle(false)}>
              <ul className="app__navbar-links">
                {[
                  "Home",
                  "About",
                  "contact",
                  "work",
                  "Skills",
                  "Testimonial",
                ].map((items) => (
                  <li key={items}>
                    <div />
                    <a href={`#${items}`} onClick={() => setToggle(false)}>
                      {items}
                    </a>
                  </li>
                ))}
              </ul>
            </HiX>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
