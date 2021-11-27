// libs
import {motion} from 'framer-motion';
// components
import BioChapter from "./BioChapter";
// hooks
// store
import {biochapters} from '../../store/allData';
// utils & animation



const Biography: React.FC = () => {
  return (
    <div>
      <motion.h2 layout  className="text-5xl text-gray-300 mb-10 mx-auto">Biography</motion.h2>
        {biochapters[0] && biochapters.map((chap,index)=>{
            return <BioChapter chap={chap} firstChap={index === 0 ? true : false} />
        })}
    </div>
  );
};

export default Biography;
