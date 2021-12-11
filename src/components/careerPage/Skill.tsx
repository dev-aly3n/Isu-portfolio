import { motion } from "framer-motion";
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
        <motion.img
          variants={skillImgAnimation}
          style={{ left: `${skill.perc - 7}%` }}
          src={`/media/logos/${skill.icon}`}
        />
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
