import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useOnScrollAnimation } from "../../../hooks/useOnScrollAnimation";
import { secFading } from "../../../utils/animation";

interface props {
    pub:string;
}
const EachPub: React.FC<props> = ({pub}) => {
  const [sec, controls] = useOnScrollAnimation();

  return (
    <motion.li
      ref={sec}
      variants={secFading}
      initial="hidden"
      animate={controls}
      className="flex justify-start items-start text-white gap-x-3"
    >
      <span>
        <FontAwesomeIcon icon={faPaperclip} />
      </span>
      <p>{pub}</p>
    </motion.li>
  );
};

export default EachPub;
