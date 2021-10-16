import LeftDoor from "./LeftDoor";
import RightDoor from "./RightDoor";
import { motion } from "framer-motion";
import { enterToGate } from "../../utils/animation";

const Gate: React.FC = (): JSX.Element => {



  return (
      <motion.div
        className="flex flex-col justify-center items-center mx-auto w-screen h-screen overflow-hidden"
        variants={enterToGate}
        initial="hidden"
        animate="visible"
        exit="out"
      >
        <div className="flex flex-row items-center justify-between w-full h-full"
              style={{transformStyle:"preserve-3d", perspective: "500px"}}
              >
          <div
            className="w-1/2 h-full z-20"
            style={{
              perspective: "1000px",
              perspectiveOrigin: "left",
            }}
          >
            <LeftDoor />
          </div>
          <div
            className="w-1/2 h-full z-10"
            style={{ perspective: "1000px", perspectiveOrigin: "right" }}
          >
            <RightDoor />
          </div>
        </div>
      </motion.div>
  );
};

export default Gate;
