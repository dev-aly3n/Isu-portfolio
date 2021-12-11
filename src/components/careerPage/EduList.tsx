// libs
import { motion } from "framer-motion";
import { RefObject } from "react";
// components
import Edu from "./Edu";
// hooks
// store
import { eduData } from "../../store/allData";
// utils & animation

interface props {
  eduRef: RefObject<HTMLDivElement>;
}
const EduList: React.FC<props> = ({ eduRef }) => {
  return (
    <div ref={eduRef}>
      <motion.h2 layout>Education</motion.h2>
      {eduData.map((education) => {
        return <Edu key={education.name} education={education} />;
      })}
    </div>
  );
};

export default EduList;
