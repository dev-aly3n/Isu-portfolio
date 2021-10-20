import { IsuGateCtxProvider } from "../../store/context/isuGateCtx";
import Gate from "./Gate";
import { motion } from "framer-motion";
import { backRoadImg } from "../../utils/animation";

const GatePage: React.FC = () => {
  return (
    <IsuGateCtxProvider>
      <motion.div className="w-[100%] h-[100%] fixed top-0 left-[0%] flex justify-center items-center" 
      style={{zIndex:0,perspective:"30px",transformStyle:"preserve-3d" }} variants={backRoadImg}
       initial="hidden" animate="visible" exit="out" >
         
      <motion.img  src="/backroad.jpg"
       className="!min-w-[10000px] h-[300%] " style={{zIndex:0,
       transformOrigin:"center bottom 0px",
         translateY:"0px" ,translateZ:"0px", rotateX:"55deg",rotateZ:"0deg",rotateY:"0deg" }}  />
       </motion.div>
      <Gate />
    </IsuGateCtxProvider>
  );
};

export default GatePage;
