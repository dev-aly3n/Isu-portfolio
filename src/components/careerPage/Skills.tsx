// libs
import { motion } from "framer-motion";
import { RefObject } from "react";
// components
// hooks
import { useOnScrollAnimation } from "../../hooks/useOnScrollAnimation";
// store
import {
  hardSkillList,
  SoftSkillList,
  eduSkillList,
  langList,
} from "../../store/allData";
import Skill from "./Skill";
// utils & animation
import { secFading } from "../../utils/animation";

interface props {
  skillsRef: RefObject<HTMLDivElement>;
}

const Skills: React.FC<props> = ({ skillsRef }) => {
  const [sec1, controls1] = useOnScrollAnimation();
  const [sec2, controls2] = useOnScrollAnimation();
  const [sec3, controls3] = useOnScrollAnimation();
  const [sec4, controls4] = useOnScrollAnimation();
  return (
    <motion.div ref={skillsRef} layout className="skills-container">
      <h3>Hard Skills</h3>
      <motion.div
        ref={sec1}
        initial="hidden"
        animate={controls1}
        variants={secFading}
      >
        {hardSkillList.map((skill, index) => {
          return <Skill key={skill.name} skill={skill}  />;
        })}
      </motion.div>
      <h3>Soft Skills</h3>
      <motion.div
        ref={sec2}
        initial="hidden"
        animate={controls2}
        variants={secFading}
      >
        {SoftSkillList.map((skill, index) => {
          return <Skill key={skill.name} skill={skill}  />;
        })}
      </motion.div>
      <h3>Languages</h3>
      <motion.div
        ref={sec3}
        initial="hidden"
        animate={controls3}
        variants={secFading}
      >
        {langList.map((skill, index) => {
          return <Skill key={skill.name} skill={skill}  />;
        })}
      </motion.div>
      <h3>Educational Skills</h3>
      <motion.div
        ref={sec4}
        initial="hidden"
        animate={controls4}
        variants={secFading}
        className="flex flex-wrap "
      >
        {eduSkillList.map((skillName) => {
          return (
            <span
              key={skillName}
              className="bg-gray-500 py-2 px-4 m-2 rounded-full text-sm"
            >
              {skillName}
            </span>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
