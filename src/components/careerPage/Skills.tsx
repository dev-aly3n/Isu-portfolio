// libs
// components
// hooks
// store
import {
  hardSkillList,
  SoftSkillList,
  eduSkillList,
} from "../../store/allData";
import Skill from "./Skill";
// utils & animation

const Skills: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-8/12 mx-auto">
      <h2 className=" my-5 font-black text-3xl">Hard Skills</h2>
      <div className="flex flex-wrap justify-start items-start">
        {hardSkillList.map((skill, index) => {
          return <Skill skill={skill} index={index} />;
        })}
      </div>
      <h2 className=" mt-10 mb-5 font-black text-3xl">Soft Skills</h2>
      <div className="flex flex-wrap justify-start items-start">
        {SoftSkillList.map((skill, index) => {
          return <Skill skill={skill} index={index} />;
        })}
      </div>
      <h2 className=" mt-10 mb-5 font-black text-3xl">Educational Skills</h2>
      <div className="flex flex-wrap">
        {eduSkillList.map((skillName) => {
          return (
            <span className="bg-gray-500 py-2 px-4 m-2 rounded-full text-sm">
              {skillName}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
