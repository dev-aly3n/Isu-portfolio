import { motion } from "framer-motion";
import { seconPage } from "../../utils/animation";

const Honors:React.FC = () => {

    return(    <motion.div
        initial="hidden"
        animate="visible"
        exit="out"
        variants={seconPage}
        className="@apply fixed top-0 left-0 z-50 h-full w-screen overflow-hidden bg-red-500"
      ></motion.div>)
}


export default Honors;