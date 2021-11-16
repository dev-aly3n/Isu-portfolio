// libs
import {AnimateSharedLayout} from 'framer-motion';
// components
import BioChapter from "./BioChapter";
// hooks
// store
import {biochapters} from '../../store/allData';
// utils & animation



const Biography: React.FC = () => {
  return (
    <div className="flex flex-col relative w-full h-full py-20 px-60">
<AnimateSharedLayout>
        {biochapters[0] && biochapters.map((chap,index)=>{
            return <BioChapter chap={chap} firstChap={index === 0 ? true : false} />
        })}
</AnimateSharedLayout>
    </div>
  );
};

export default Biography;
