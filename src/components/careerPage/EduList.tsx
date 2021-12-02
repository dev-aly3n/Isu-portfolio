// libs
import { motion } from "framer-motion";
// components
import Edu from "./Edu";
// hooks
// store
import {eduData} from '../../store/allData'
// utils & animation


const EduList: React.FC = () => {
  return (
    <div  >
        <motion.h2 layout  className="text-5xl text-gray-300 mb-10 mx-auto">Education</motion.h2>
      {eduData.map((education)=>{
          return <Edu key={education.name} education={education} />
      })}
    </div>
  );
};

export default EduList;