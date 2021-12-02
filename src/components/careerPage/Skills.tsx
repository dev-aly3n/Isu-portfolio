// libs
import { motion } from "framer-motion";
// components
// hooks
// store
import {
  hardSkillList,
  SoftSkillList,
  eduSkillList,
  langList
} from "../../store/allData";
import Skill from "./Skill";
// utils & animation

const Skills: React.FC = () => {
  return (
    <motion.div layout className="skills-container">
      <h2>Hard Skills</h2>
      <div>
        {hardSkillList.map((skill, index) => {
          return <Skill key={skill.name} skill={skill} index={index} />;
        })}
      </div>
      <h2>Soft Skills</h2>
      <div>
        {SoftSkillList.map((skill, index) => {
          return <Skill key={skill.name} skill={skill} index={index} />;
        })}
      </div>
      <h2>Languages</h2>
      <div>
        {langList.map((skill, index) => {
          return <Skill key={skill.name} skill={skill} index={index} />;
        })}
      </div>
      <h2>Educational Skills</h2>
      <div className="flex flex-wrap ">
        {eduSkillList.map((skillName) => {
          return (
            <span key={skillName} className="bg-gray-500 py-2 px-4 m-2 rounded-full text-sm">
              {skillName}
            </span>
          );
        })}
      </div>

    </motion.div>
  );
};

export default Skills;
