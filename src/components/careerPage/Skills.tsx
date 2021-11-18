// libs
// components
// hooks
// store
import { skillList } from "../../store/allData";
import Skill from "./Skill";
// utils & animation

const Skills: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2>Skills</h2>
      <div className="flex flex-col justify-center items-start">
        {skillList.map((skill, index) => {
          return <Skill skill={skill} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
