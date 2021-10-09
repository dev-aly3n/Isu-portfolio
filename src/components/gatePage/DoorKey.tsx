//libs
import { useContext, useRef, useEffect } from "react";

//store
import { IsuGateCtx } from "../../store/context/isuGateCtx";

//components
import { motion } from "framer-motion";
import KeyUpLine from "./keyLines/KeyUpLine";
import KeyMidLine from "./keyLines/KeyMidLine";
import KeyDynamicUpLine from "./keyLines/KeyDynamicUpLine";
import KeyDynamicMidLine from "./keyLines/KeyDynamicMidLine";

const doorAnimation = {
  hidden: { transform: "rotate(0deg)" },
  visable: {
    transform: "rotate(90deg)",

    transition: { duration: 3, delay: 0, ease: [0.12, 0.35, 0.9, 1.05] },
  },
};

const DoorKey: React.FC = (): JSX.Element => {
  const gateCtx = useContext(IsuGateCtx);

  const keyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(keyRef.current){
    keyRef.current.addEventListener('mouseover', function(){
      gateCtx.hovering(true)
    });
    keyRef.current.addEventListener('mouseleave', function(){
      gateCtx.hovering(false)
    });
    keyRef.current.addEventListener('click', function(){
      gateCtx.clicking(true)
    });
  }

  }, [keyRef])
  return (
    <div ref={keyRef} className="cycle-1 absolute left-full ml-[-15vw] top-1/2 mt-[-15vw] z-20 rounded-full w-[30vw] h-[30vw] flex justify-center items-center">
      <motion.img
        src="/door1.png"
        alt=""
        className="w-[30vw] h-[30vw] rounded-full z-60 absolute top-1/2 left-1/2 mt-[-50%] ml-[-50%]"
        variants={doorAnimation}
        initial="hidden"
        animate="visable"
      />
      <div
        className="w-[22vw] h-[22vw] rounded-full z-40 relative"
        style={{ backgroundImage: "url(/key.jpg)" }}
      >
        <div className="h-1/2 w-1/2 absolute top-[11vw] left-[11vw] mt-[-5.5vw]  ml-[-5.5vw] rounded-full bg-gray-500 z-50"></div>
        <div className="flex flex-col absolute top-1/2 mt-[-30%] left-1/2 ml-[-47%] w-full z-40">
          <div className="relative">
            <KeyUpLine />
            <div className="absolute top-0 left-0 w-full h-full">
              <KeyDynamicUpLine />
            </div>
          </div>
          <div className="relative" style={{ transform: "scaleY(-1)" }}>
            <KeyMidLine />
            <div className="absolute top-0 left-0 w-full h-full">
              <KeyDynamicMidLine />
            </div>
          </div>
          <div className="relative" style={{ transform: "scaleY(-1)" }}>
            <KeyUpLine />
            <div className="absolute top-0 left-0 w-full h-full">
              <KeyDynamicUpLine />
            </div>
          </div>
        </div>
        <div
          className="flex flex-col absolute top-1/2 mt-[-30%] left-1/2 ml-[-53%] w-full z-40"
          style={{ transform: "scaleX(-1)" }}
        >
          <div className="relative">
            <KeyUpLine />
            <div className="absolute top-0 left-0 w-full h-full">
              <KeyDynamicUpLine />
            </div>
          </div>
          <div className="relative" style={{ transform: "scaleY(-1)" }}>
            <KeyMidLine />
            <div className="absolute top-0 left-0 w-full h-full">
              <KeyDynamicMidLine />
            </div>
          </div>
          <div className="relative" style={{ transform: "scaleY(-1)" }}>
            <KeyUpLine />
            <div className="absolute top-0 left-0 w-full h-full">
              <KeyDynamicUpLine />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoorKey;
