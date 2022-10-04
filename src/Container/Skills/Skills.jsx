import React, { useEffect, useState } from "react";
import { animate, motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper/Index";

import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [exp, setExp] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type=="experiences"]';
    const Skillsquery = '*[_type=="skills"]';

    client.fetch(query).then((data) => setExp(data));

    client.fetch(Skillsquery).then((data) => setSkills(data));
  }, []);
  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              className="app__skills-item app__flex"
              whileInView={{ opacity: [0, 1] }}
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgcolor }}
                key={skill.name}
              >
                <img src={urlFor(skill.icon)} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp">
          {exp?.map((exp) => (
            <motion.div className="app__skills-exp-item" key={exp.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{exp.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {exp.works.map((work) => (
                  <>
                    <motion.div
                      className="app__skills-exp app__flex"
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app_whitebg"
);
