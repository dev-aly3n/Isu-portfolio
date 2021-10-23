import { IsuGateCtxProvider } from "../../store/context/isuGateCtx";
import Gate from "./Gate";
import { motion } from "framer-motion";
import { backRoadImg } from "../../utils/animation";
import Audio from "./Audio";

const GatePage: React.FC = () => {
  return (
    <IsuGateCtxProvider>
      <Audio />
      <div className="relative w-screen h-screen overflow-hidden" id="titop">

      <motion.div
        className="w-[100%] h-[100%] absolute top-0 left-0 flex justify-center items-center"
        style={{
          perspective: "30px",
          transformStyle: "preserve-3d",
        }}
        variants={backRoadImg}
        initial="hidden"
        animate="visible"
        exit="out"
        >
        <motion.img
          src="/backroad.jpg"
          className="!min-w-[10000px] h-[300%] "
          style={{
            transformOrigin: "center bottom",
            rotateX: "55deg",
          }}
        />

      </motion.div>
      <Gate />
      </div>

    </IsuGateCtxProvider>
  );
};

export default GatePage;
