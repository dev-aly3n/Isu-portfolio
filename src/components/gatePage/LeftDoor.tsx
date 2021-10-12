//libs
import { useContext } from "react";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
//store
import { IsuGateCtx } from "../../store/context/isuGateCtx";
//components
import UpLine from "./doorLines/UpLine";
import MidLine from "./doorLines/MidLine";
import PhLine from "./doorLines/PhLine";
import DoorKey from "./DoorKey";
import DynamicUpLine from "./doorLines/DynamicUpLine";
import DynamicMidLine from "./doorLines/DynamicMidLine";
import DynamicPhLine from "./doorLines/DynamicPhLine";
//hooks
import { useGateOpened } from "../../hooks/useGateOpened";
// utils and animation
import { openDoor } from "../../utils/animation";

const LeftDoor: React.FC = (): JSX.Element => {
  const controls= useGateOpened();
  const gateCtx = useContext(IsuGateCtx);
  console.log(gateCtx);
  return (
    <motion.div
      className=" h-full relative"
      variants={openDoor}
      initial="hidden"
      animate={controls}
      style={{transformStyle:"preserve-3d", transformOrigin:"left"}}
    >
      <img src="/gate1.jpg" className="w-full h-screen object-right" />

      <DoorKey />
      <div className="absolute top-0 right-0 w-36 h-[50vh]">
        <PhLine />
      </div>
      <div className="absolute top-0 right-0 w-36 h-[50vh]">
        <DynamicPhLine />
      </div>
      <div
        className="absolute bottom-0 right-0 w-36 h-[50vh]"
        style={{ transform: "scaleY(-1)" }}
      >
        <PhLine />
      </div>
      <div
        className="absolute bottom-0 right-0 w-36 h-[50vh]"
        style={{ transform: "scaleY(-1)" }}
      >
        <DynamicPhLine />
      </div>
      <div className="flex flex-col absolute top-1/2 mt-[-40%] right-0 w-full">
        <div className="relative">
          <UpLine />
          <div className="absolute top-0 left-0 w-full h-full">
            <DynamicUpLine logic={true} setFinished={gateCtx.doorFinishing} />
          </div>
        </div>
        <div className="relative">
          <MidLine />
          <div className="absolute top-0 left-0 w-full h-full ">
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
