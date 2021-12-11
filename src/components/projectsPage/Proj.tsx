// libs
import { motion } from "framer-motion";
import { RefObject } from "react";
// components
import Link from "next/link";
// hooks
// store
// utils & animation

interface props {
  settingID: (id: string | null) => void;
  project: {
    name: string;
    desc: string;
    url: string;
    image: string;
    techs: { name: string; color: string }[];
  };
}

const Proj: React.FC<props> = ({ settingID, project }) => {
  const projClickHandler = () => {
    setTimeout(() => {}, 500);
    settingID(project.url);
  };

  return (
    <Link
      href={`?ID=${project.url}`}
      scroll={false}
      prefetch={false}
      shallow={true}
    >
      <motion.div
        layoutId={project.url}
        className="proj-container group"
        onClick={projClickHandler}
      >
        <img src={`/media/projects/${project.image}`} />
        <div>
          <h3>{project.name}</h3>
          <p>{project.desc}</p>
          <div className="">
            {project.techs.map((tech) => {
              return (
                <span key={tech.name} style={{ backgroundColor: tech.color }} className="group-hover:grayscale-0">
                  {tech.name}
                </span>
              );
            })}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default Proj;
