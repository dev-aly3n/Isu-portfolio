//libs
import { useContext } from "react";
import { motion } from "framer-motion";
//store
import { IsuGateCtx } from "../../../store/context/isuGateCtx";
//components
import UpLine from "../doorLines/UpLine";
import MidLine from "../doorLines/MidLine";
import PhLine from "../doorLines/PhLine";
import DoorKey from "../DoorKey";
import DynamicUpLine from "../doorLines/DynamicUpLine";
import DynamicMidLine from "../doorLines/DynamicMidLine";
import DynamicPhLine from "../doorLines/DynamicPhLine";
//hooks
import { useGateOpened } from "../../../hooks/useGateOpened";
// utils and animation
import { openDoor } from "../../../utils/animation";

const LeftDoor: React.FC = (): JSX.Element => {
  const controls = useGateOpened();
  const gateCtx = useContext(IsuGateCtx);
  return (
    <motion.div
      className="left-door-container"
      variants={openDoor}
      initial="hidden"
      animate={controls}
    >
      <img src="/media/gate/gate1.jpg" />

      <DoorKey />
      <div className="left-ph">
        <div>
          <div>
            <PhLine />
          </div>
          <div>
            <DynamicPhLine />
          </div>
          <div style={{ transform: "scaleY(-1)" }}>
            <PhLine />
          </div>
          <div style={{ transform: "scaleY(-1)" }}>
            <DynamicPhLine />
          </div>
        </div>
      </div>
      <div className="left-lines">
        <div>
          <UpLine />
          <div>
            <DynamicUpLine logic={true} setFinished={gateCtx.doorFinishing} />
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
