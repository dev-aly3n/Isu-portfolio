// libs
import { motion } from "framer-motion";
import Image from "next/image";
// components
import Link from "next/link";
// hooks
// store
// utils & animation

interface props {
  settingID: (id: string | null, git: string | null) => void;
  project: {
    name: string;
    desc: string;
    url: string;
    gitHub: string;
    image: string;
    techs: { name: string; color: string }[];
  };
}

const Proj: React.FC<props> = ({ settingID, project }) => {
  const projClickHandler = () => {
    settingID(project.url, project.gitHub);
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
          <Image
            alt={project.name}
            src={`/media/projects/${project.image}`}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
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
