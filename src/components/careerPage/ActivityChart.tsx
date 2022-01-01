import { motion } from "framer-motion";
import { useOnScrollAnimation } from "../../hooks/useOnScrollAnimation";
import { secFading } from "../../utils/animation";
import { ActivityChartData } from "../../store/allData";

const ActivityChart: React.FC = () => {
  const [sec, controls] = useOnScrollAnimation();
  return (
    <motion.div
      ref={sec}
      initial="hidden"
      animate={controls}
      variants={secFading}
    >
      <h2 className="text-5xl text-gray-300 mb-10 mx-auto text-center mt-5">
        Coding Activity
      </h2>
      <p className="w-10/12">
        This chart just showing the TIME of TYPING code. So it not considering
        the time of thinking, searching at google, watching video about code or
        even reading the docs. Maybe multiply it by 2 or 3 can show my real
        coding activity.
      </p>
      {ActivityChartData[0] &&
        ActivityChartData.map((chart) => {
          return (
            <figure key={chart} className="w-full  my-10 px-5 md:w-[768px]">
              <embed src={chart}></embed>
            </figure>
          );
        })}
    </motion.div>
  );
};

export default ActivityChart;
