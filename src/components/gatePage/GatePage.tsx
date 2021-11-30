import { IsuGateCtxProvider } from "../../store/context/isuGateCtx";
import Gate from "./Gate";
import { motion } from "framer-motion";
import { backRoadImg } from "../../utils/animation";
import Audio from "./Audio";

import { faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState, useRef } from "react";

const GatePage: React.FC = () => {
  const muteRef = useRef<HTMLDivElement>(null);
  const [muteSound, setMuteSound] = useState(false);

  const volumeHandler = () => {
    setMuteSound(true);
    if (muteRef.current) {
      muteRef.current.style.display = "none";
    }
  };
  const muteHandler = () => {
    if (muteRef.current) {
      muteRef.current.style.display = "none";
    }
  };

  return (
    <IsuGateCtxProvider>
      {muteSound && <Audio />}
      <div className="titop" id="titop">
        <motion.div
          variants={backRoadImg}
          initial="hidden"
          animate="visible"
          exit="out"
        >
          <motion.img
            src="/media/gate/backroad.jpg"
            style={{ rotateX: "55deg" }}
          />
        </motion.div>
        <Gate />
        <div
          ref={muteRef}
          className="w-screen h-screen absolute top-0 left-0 bg-gray-900/95 z-100 flex justify-center items-center"
        >
          <div className="bg-gray-300 w-11/12 sm:w-8/12 lg:w-1/2 h-1/2 rounded-2xl
           flex flex-col justify-center items-center text-2xl font-medium px-4 sm:px-10">
            <p>
              The content has sound effect <FontAwesomeIcon icon={faVolumeUp} />{" "}
              , Do you allow us to play sound?
            </p>
            <div className="flex items-center justify-center gap-x-10 mt-10">
              <button
                onClick={muteHandler}
                className="px-10 py-3 rounded-xl bg-red-300 shadow-xl duration-500
                 hover:bg-red-500 hover:text-white hover:scale-110 hover:ring-4 "
              >
                No <FontAwesomeIcon icon={faVolumeMute} />
              </button>
              <button
                onClick={volumeHandler}
                className="px-10 py-3 rounded-xl bg-green-300 shadow-xl duration-500
                 hover:bg-green-500 hover:text-white hover:scale-110 hover:ring-4"
              >
                Yes <FontAwesomeIcon icon={faVolumeUp} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </IsuGateCtxProvider>
  );
};

export default GatePage;
