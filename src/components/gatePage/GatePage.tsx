import { IsuGateCtxProvider } from "../../store/context/isuGateCtx";
import Gate from "./Gate";
import { motion } from "framer-motion";
import { backRoadImg } from "../../utils/animation";

const GatePage: React.FC = () => {
  return (
    <IsuGateCtxProvider>
      <motion.div className="w-[200%] h-[200%] fixed top-0 left-[-50%] flex justify-center items-center" style={{zIndex:0, }} variants={backRoadImg} initial="hidden" animate="visible" exit="out" style={{perspective:"1000px"}}>
      <motion.img  src="/backroad.jpg"
       className="!min-w-[3000px] h-full mx-auto" style={{zIndex:0, transformStyle:"preserve-3d",
       rotateX:"65deg",transformOrigin:"bottom",
        translateZ:"300px", translateY:"-700px" }}  />
       </motion.div>
      <Gate />
    </IsuGateCtxProvider>
  );
};

export default GatePage;
