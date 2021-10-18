//libs
import { useContext } from "react";

//store
import { IsuGateCtx } from "../../store/context/isuGateCtx";

//components
import { motion } from "framer-motion";
import KeyUpLine from "./keyLines/KeyUpLine";
import KeyMidLine from "./keyLines/KeyMidLine";
import KeyDynamicUpLine from "./keyLines/KeyDynamicUpLine";
import KeyDynamicMidLine from "./keyLines/KeyDynamicMidLine";
import LightKey from "./LightKey";

//hooks

const DoorKey: React.FC = (): JSX.Element => {
  const gateCtx = useContext(IsuGateCtx);

  const keyMouseOverHandler = () => {
    if (!gateCtx.isClicked) {
      gateCtx.hovering(true);
    }
  };
  const keyMouseLeaveHandler = () => {
    if (!gateCtx.isClicked) {
      gateCtx.hovering(false);
    }
  };
  const keyClickHandler = () => {
    gateCtx.clicking(true);
  };
  return (
    <div
      onMouseOver={keyMouseOverHandler}
      onMouseLeave={keyMouseLeaveHandler}
      onClick={keyClickHandler}
      className={`cycle-1 absolute left-full ml-[-15vw] top-1/2 mt-[-15vw] z-20 rounded-full w-[30vw] h-[30vw]
       flex justify-center items-center group -rotate-45 hover:rotate-0 duration-1500 hover:-translate-y-10
       hover:scale-110
       ${gateCtx.isClicked ? "rotate-0 !-translate-y-0 !scale-100" : ""} `}
    >
      <LightKey />
      <div
        className="w-[22vw] h-[22vw] rounded-full z-40 relative"
        style={{ backgroundImage: "url(/key.jpg)" }}
      >
        <div
          className={`h-1/2 w-1/2 absolute top-[11vw] left-[11vw] mt-[-5.5vw]  ml-[-5.5vw] rounded-full
          z-50 overflow-hidden duration-1500 flex justify-center items-center rotate-45 group-hover:rotate-0 
          ${gateCtx.isClicked ? "!rotate-0" : ""}`}
          style={{
            boxShadow: `${
              gateCtx.isHovered
                ? "0px 0px 10px 2px rgba(0,0,0,0.7)"
                : "0px 0px 10px 5px rgba(0,0,0,0.7)"
            }`,
            backgroundImage: "url(/key.jpg)",
          }}
        >
          <div
            className={`text-transparent bg-clip-text text-4xl font-black text-center`}
            style={{
              textShadow: "rgba(0,0,0,0.3) 3px 1px 5px",
              backgroundImage: "url(/keytext.jpg)",
              backgroundPosition: "center",
              backgroundSize: "fill",
            }}
          >
            Open
            <br />
            The
            <br />
            Gate
          </div>
        </div>
        <div className="flex flex-col absolute top-1/2 mt-[-30%] left-1/2 ml-[-47%] w-full z-40">
          <div className="relative">
            <KeyUpLine />
            <div className="absolute top-0 left-0 w-full h-full">
              <KeyDynamicUpLine
                logic={true}
                setFinished={gateCtx.keyFinishing}
                clicked={gateCtx.isClicked}
              />
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
