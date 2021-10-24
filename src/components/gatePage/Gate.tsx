// libs
import { motion } from "framer-motion";
// components
import LeftDoor from "./LeftDoor";
import RightDoor from "./RightDoor";
// hooks
// store
// utils & animation
import { enterToGate } from "../../utils/animation";

const Gate: React.FC = (): JSX.Element => {
  return (
    <motion.div
      className="gate-container"
      variants={enterToGate}
      initial="hidden"
      animate="visible"
      exit="out"
      layout
    >
      <div>
        <div>
          <LeftDoor />
        </div>
        <div>
          <RightDoor />
        </div>
      </div>
    </motion.div>
  );
};

export default Gate;
