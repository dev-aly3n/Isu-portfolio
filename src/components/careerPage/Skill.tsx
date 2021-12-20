import { motion } from "framer-motion";
import Image from "next/image";
import {
  skillAnimation,
  skillExplosionAnimation,
  skillImgAnimation,
} from "../../utils/animation";

interface props {
  skill: { name: string; icon: string; perc: number; color: string };
  index: number;
}

const Skill: React.FC<props> = ({ skill }) => {
  return (
    <div className="skill-container">
      <h3>{skill.name}</h3>
      <div>
        <motion.div
          variants={skillAnimation}
          custom={`${skill.perc - 7}%`}
          style={{
            backgroundColor: `rgb${skill.color}`,
          }}
        ></motion.div>
        <motion.span
          variants={skillImgAnimation}
          style={{ left: `${skill.perc - 7}%` }}
        >
          <Image
            alt={skill.name}
            src={`/media/logos/${skill.icon}`}
            layout="fill"
            objectFit="cover"
          />
        </motion.span>

        {skill.name === "Creativity" && (
          <motion.img
            variants={skillExplosionAnimation}
            src={`/media/logos/explosion.png`}
            className="creativity-explosion"
          />
        )}
      </div>
    </div>
  );
};

export default Skill;
