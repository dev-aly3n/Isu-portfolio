import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { RefObject } from "react";

interface props {
  settingID: (id: string | null) => void;
  project: { name: string; desc: string; url: string; image: string; techs:{name:string; color:string;}[]; };
  projectsRef: RefObject<HTMLDivElement>;
}

const Proj: React.FC<props> = ({ settingID, project, projectsRef }) => {
  const router = useRouter();

  const projClickHandler = () => {
    setTimeout(() => {
      projectsRef.current!.style.height = "70vh";
    }, 500);
    settingID(project.url);
    setTimeout(() => {
      router.push(`?ID=${project.url}`);
    }, 100);
  };

  return (
    <motion.div
      layoutId={project.url}
      className="w-96 min-h-[600px] flex flex-col bg-purple-50 rounded-xl overflow-hidden 
         border-gray-300 duration-500 cursor-pointer hover:scale-105 group"
      onClick={projClickHandler}
    >
      <img className="rounded-b-xl" src={`/media/projects/${project.image}`} />
      <div className="flex flex-col mt-2 px-3">
          <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
          <p className="text-base font-medium leading-5 mt-1">{project.desc}</p>
        <div className="flex flex-wrap gap-1 mt-2">
          {project.techs.map((tech)=> {
            return (<span key={tech.name} className="px-2 py-px rounded-full text-white contrast-[0.9] font-semibold text-sm
             duration-500 filter grayscale-[0.3] group-hover:grayscale-0"
             style={{backgroundColor:tech.color}}>{tech.name}</span>)
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Proj;
