// libs
// components
// hooks
// store
import { hardSkillList, SoftSkillList } from "../../store/allData";
import Skill from "./Skill";
// utils & animation

const Skills: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-8/12 mx-auto">
      <h2>Skills</h2>
      <div className="flex flex-wrap justify-center items-start">
        {hardSkillList.map((skill, index) => {
          return <Skill skill={skill} index={index} />;
        })}
      </div>
        <h2>Soft Skills</h2>
      <div className="flex flex-wrap justify-center items-start">
        {SoftSkillList.map((skill, index) => {
          return <Skill skill={skill} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
