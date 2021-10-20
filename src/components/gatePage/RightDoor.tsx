import UpLine from "./doorLines/UpLine";
import MidLine from "./doorLines/MidLine";
import PhLine from "./doorLines/PhLine";
import DynamicUpLine from "./doorLines/DynamicUpLine";
import DynamicMidLine from "./doorLines/DynamicMidLine";
import DynamicPhLine from "./doorLines/DynamicPhLine";
import { motion } from "framer-motion";

//hooks
import { useGateOpened } from "../../hooks/useGateOpened";
import { openDoor2 } from "../../utils/animation";

const LeftDoor: React.FC = (): JSX.Element => {
  const controls = useGateOpened();
  return (
    <motion.div
      variants={openDoor2}
      initial="hidden"
      animate={controls}
      className="h-full relative right-door overflow-hidden"
      style={{transformStyle:"preserve-3d",transformOrigin:"right", rotateY:"-60deg" }}
    >
      <img
        src="/gate2.jpg"
        style={{ transform: "scaleX(1)" }}
        className="w-full h-screen object-left"
      />
      <div
        className="absolute top-0 left-0 w-36 h-[50vh] "
        style={{ transform: "scale(-1,1)" }}
      >
        <PhLine />
      </div>
      <div
        className="absolute top-0 left-0 w-36 h-[50vh] "
        style={{ transform: "scale(-1,1)" }}
      >
        <DynamicPhLine />
      </div>
      <div
        className="absolute bottom-0 left-0 w-36 h-[50vh]"
        style={{ transform: "scale(-1,-1)" }}
      >
        <PhLine />
      </div>
      <div
        className="absolute bottom-0 left-0 w-36 h-[50vh]"
        style={{ transform: "scale(-1,-1)" }}
      >
        <DynamicPhLine />
      </div>
      <div className="flex flex-col absolute top-1/2 mt-[-40%] right-0 w-full" style={{transform:"scaleX(-1)"}}>
        <div className="relative">
          <UpLine />
          <div className="absolute top-0 left-0 w-full h-full">
            <DynamicUpLine />
          </div>
        </div>
        <div className="relative">
          <MidLine />
          <div className="absolute top-0 left-0 w-full h-full">
            <DynamicMidLine />
          </div>
        </div>
        <div className="relative" style={{ transform: "scaleY(-1)" }}>
          <MidLine />
          <div className="absolute top-0 left-0 w-full h-full">
            <DynamicMidLine />
          </div>
        </div>
        <div className="relative" style={{ transform: "scaleY(-1)" }}>
          <UpLine />
          <div className="absolute top-0 left-0 w-full h-full">
            <DynamicUpLine />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LeftDoor;
