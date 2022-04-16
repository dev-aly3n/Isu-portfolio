import { AnimateSharedLayout, motion } from "framer-motion";
import { achievementData } from "../../store/allData";
import { seconPage } from "../../utils/animation";
import EachHonor from "./EachHonor";

const Honors: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="out"
      variants={seconPage}
      className="fixed top-0 left-0 z-50 h-full w-screen overflow-hidden text-white"
    >
      <div className="w-full  h-full flex flex-col justify-start items-center overflow-y-scroll">
        <div className="flex flex-col justify-start items-center w-full">
          <h3 className="z-10 mt-24 text-white text-2xl sm:text-4xl">
          Honors & Achievements
          </h3>
          <motion.ul className="flex flex-col justify-center items-center mx-auto w-11/12 lg:w-9/12 h-full rounded-xl  gap-y-3 py-12 z-10 bg-primary-700/90 mt-14">
            <AnimateSharedLayout>
              {achievementData.map((data) => {
                return <EachHonor key={data.id} data={data} />;
              })}
            </AnimateSharedLayout>
          </motion.ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Honors;
