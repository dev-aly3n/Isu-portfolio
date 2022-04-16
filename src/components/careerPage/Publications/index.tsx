import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useOnScrollAnimation } from "../../../hooks/useOnScrollAnimation";
import { publicationsData } from "../../../store/allData";
import { secFading } from "../../../utils/animation";
import EachPub from "./EachPub";

const Publication: React.FC = () => {
  const [sec, controls] = useOnScrollAnimation();

  return (
    <motion.div
      ref={sec}
      variants={secFading}
      initial="hidden"
      animate={controls}
      className=" flex flex-col justify-start items-start "
    >
      <motion.h2 className="!text-3xl !font-bold sm:!text-5xl">
        Publications & Posters
      </motion.h2>
      <ul className="flex flex-col gap-y-10 w-11/12">
        {publicationsData.map((pub) => {
          return <EachPub pub={pub} />;
        })}
      </ul>
    </motion.div>
  );
};

export default Publication;
