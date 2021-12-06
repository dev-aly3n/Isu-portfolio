import { motion } from "framer-motion";
import { useRouter } from "next/router";

interface props {
  settingID: (id: string | null) => void;
  project: {  name: string;
    desc: string;
    url: string;
    image: string;}
}

const Proj: React.FC<props> = ({ settingID,project }) => {
  const router = useRouter();

  const projClickHandler = () => {
    document.body.style.overflow = "hidden";
    settingID("iddd");
    setTimeout(() => {
      router.push(`?ID=${project.url}`);
    }, 100);
  };
  return (
    <motion.div
      layoutId={project.url}
      className="w-96 h-[calc(100vh-160px)] flex flex-col bg-gray-50 rounded-xl overflow-hidden border-4
         border-gray-300 duration-500 cursor-pointer hover:scale-105"
      onClick={projClickHandler}
    >
      <img src={`/media/projects/${project.image}`} />
      <div className="flex flex-col">
        <h3>{project.name}</h3>
        <p>
{project.desc}
        </p>
      </div>
    </motion.div>
  );
};

export default Proj;
