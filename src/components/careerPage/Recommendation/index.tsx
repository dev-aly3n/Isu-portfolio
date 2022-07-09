import { motion } from "framer-motion";
import { RefObject } from "react";
import { recomData } from "../../../store/allData";
import Recom from "./Recom";
interface props {
    recomRef:RefObject<HTMLDivElement>;
}
const Recommendation: React.FC<props> = ({recomRef}) => {
  return (
    <div ref={recomRef}>
      <motion.h2 layout>Recommendation</motion.h2>
      <div className="w-full h-full flex flex-col justify-center items-center gap-5">
        {recomData.map((recom) => {
          return <Recom recom={recom} />;
        })}
      </div>
    </div>
  );
};

export default Recommendation;
