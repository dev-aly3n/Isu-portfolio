import { IsuGateCtxProvider } from "../../store/context/isuGateCtx";
import Gate from "./Gate";
import { motion } from "framer-motion";
import { backRoadImg } from "../../utils/animation";
import Audio from "./Audio";

const GatePage: React.FC = () => {
  return (
    <IsuGateCtxProvider>
      <Audio />
      <div className="titop" id="titop">
        <motion.div
          variants={backRoadImg}
          initial="hidden"
          animate="visible"
          exit="out"
        >
          <motion.img src="/backroad.jpg" style={{ rotateX: "55deg" }} />
        </motion.div>
        <Gate />
      </div>
    </IsuGateCtxProvider>
  );
};

export default GatePage;
