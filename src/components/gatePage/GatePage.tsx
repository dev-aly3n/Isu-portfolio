import { IsuGateCtxProvider } from "../../store/context/isuGateCtx";
import Gate from "./Gate";
import { motion } from "framer-motion";
import { backRoadImg } from "../../utils/animation";

const GatePage: React.FC = () => {
  return (
    <IsuGateCtxProvider>
      <motion.div
        className="w-[100%] h-[100%] fixed top-0 left-[0%] flex justify-center items-center"
        style={{
          zIndex: 0,
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
    </IsuGateCtxProvider>
  );
};

export default GatePage;
