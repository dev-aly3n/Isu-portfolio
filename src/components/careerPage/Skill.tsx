import {motion} from 'framer-motion';
import { skillAnimation, skillExplosionAnimation, skillImgAnimation } from '../../utils/animation';


interface props {
  skill: { name: string; icon: string; perc: number; color: string };
  index: number;
}

const Skill: React.FC<props> = ({ skill, index }) => {
  return (
    <div className="flex justify-center items-center relative bg-gray-600 rounded-full w-[88%] md:w-[45%] h-12 
    self-start justify-self-start place-self-start">
      <h3 className="w-32 h-full bg-gray-800 flex justify-center items-center rounded-l-full text-xs font-bold break-words text-center">
        {skill.name}
      </h3>
      <div className="relative flex w-full h-full bg-gray-500 rounded-r-full">
        <motion.div
          className="absolute top-[50%] mt-[-10px] left-0  h-5 overflow-hidden rounded-r-full pos-dash-style"
          variants={skillAnimation}
          custom={`${skill.perc - 7}%`}
          style={{
            backgroundColor: `rgb${skill.color}`,
          }}
        ></motion.div>
        <img
                  style={{left:`${skill.perc - 7}%`}}
          src={`/media/logos/${skill.icon}`}
          className="absolute top-[50%] left-0 mt-[-14px] block h-7 ml-px"
        />
        {skill.name === "Creativity" && (
          <motion.img
          variants={skillExplosionAnimation}
            src={`/media/logos/explosion.png`}
            style={{ left: `100%` }}
            className="absolute top-[50%] mt-[-30px] block "
          />
        )}
      </div>
    </div>
  );
};

export default Skill;
