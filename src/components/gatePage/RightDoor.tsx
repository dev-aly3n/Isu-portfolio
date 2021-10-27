// libs
import { motion } from "framer-motion";
// components
import UpLine from "./doorLines/UpLine";
import MidLine from "./doorLines/MidLine";
import PhLine from "./doorLines/PhLine";
import DynamicUpLine from "./doorLines/DynamicUpLine";
import DynamicMidLine from "./doorLines/DynamicMidLine";
import DynamicPhLine from "./doorLines/DynamicPhLine";
// hooks
import { useGateOpened } from "../../hooks/useGateOpened";
// store
// utils & animation
import { openDoor2 } from "../../utils/animation";

const LeftDoor: React.FC = (): JSX.Element => {
  const controls = useGateOpened();
  return (
    <motion.div
      variants={openDoor2}
      initial="hidden"
      animate={controls}
      className="right-door-container"
    >
      <img src="/gate2.jpg" />
      <div>
        <PhLine />
      </div>
      <div>
        <DynamicPhLine />
      </div>
      <div>
        <PhLine />
      </div>
      <div>
        <DynamicPhLine />
      </div>
      <div>
        <div>
          <UpLine />
          <div>
            <DynamicUpLine />
          </div>
        </div>
        <div>
          <MidLine />
          <div>
            <DynamicMidLine />
          </div>
        </div>
        <div style={{ transform: "scaleY(-1)" }}>
          <MidLine />
          <div>
            <DynamicMidLine />
          </div>
        </div>
        <div style={{ transform: "scaleY(-1)" }}>
          <UpLine />
          <div>
            <DynamicUpLine />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LeftDoor;
