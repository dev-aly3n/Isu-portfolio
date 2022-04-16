// libs
import { motion } from "framer-motion";
// components
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { projectType } from "../../types/allTypes";
// hooks
// store
// utils & animation

interface props {
  settingID: (id: string | null, git: string | null) => void;
  project:projectType;
  setActiveData : Dispatch<SetStateAction<projectType | null>>
}

const Proj: React.FC<props> = ({ settingID, project, setActiveData }) => {
  const projClickHandler = () => {
    settingID(project.url, project.gitHub);
    setActiveData(project)
  };

  return (
    <Link
      href={`?ID=${project.url}?ID=${project.gitHub}`}
      scroll={false}
      prefetch={false}
      shallow={true}
    >
      <motion.div
        layoutId={project.url}
        className="proj-container group"
        onClick={projClickHandler}
      >
        <span>
          <img alt={project.name} src={`/media/projects/${project.image}`} />
        </span>
        <div>
          <h3>{project.name}</h3>
          <p>{project.desc}</p>
          <div>
            {project.techs.map((tech) => {
              return (
                <span
                  key={tech.name}
                  style={{ backgroundColor: tech.color }}
                  className="group-hover:grayscale-0"
                >
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
