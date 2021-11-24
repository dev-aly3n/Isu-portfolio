// libs
// components
import Edu from "./Edu";
// hooks
// store
import {eduData} from '../../store/allData'
// utils & animation


const EduList: React.FC = () => {
  return (
    <div className="flex flex-col w-8/12 mx-auto mt-20">
        <h2 className="text-5xl text-gray-300 mb-10 mx-auto">Education</h2>
      {eduData.map((education)=>{
          return <Edu education={education} />
      })}
    </div>
  );
};

export default EduList;