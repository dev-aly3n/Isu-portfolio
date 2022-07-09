import { motion } from "framer-motion";
import { recomData } from "../../../store/allData";
import Recom from "./Recom";
const Recommendation: React.FC = () => {
  return (
    <div>
      <motion.h2 layout>Recommendations</motion.h2>
      <div className="w-9/12 h-full flex flex-col justify-center items-center gap-5">
        {recomData.map((recom) => {
          return <Recom recom={recom} />;
        })}
      </div>
    </div>
  );
};

export default Recommendation;
