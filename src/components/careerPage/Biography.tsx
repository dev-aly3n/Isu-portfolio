// libs
import {motion} from 'framer-motion';
// components
import BioChapter from "./BioChapter";
// hooks
// store
import {biochapters} from '../../store/allData';
import { RefObject } from 'react';
// utils & animation

interface props {
  bioRef:RefObject<HTMLDivElement>;
}

const Biography: React.FC<props> = ({bioRef}) => {
  return (
    <div ref={bioRef}>
      <motion.h2 layout  className="text-5xl text-gray-300 mb-10 mx-auto">Biography</motion.h2>
        {biochapters[0] && biochapters.map((chap,index)=>{
            return <BioChapter key={chap.title} chap={chap} firstChap={index === 0 ? true : false} />
        })}
    </div>
  );
};

export default Biography;
