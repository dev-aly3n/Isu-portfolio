import { motion } from "framer-motion";
import { useOnScrollAnimation } from "../../hooks/useOnScrollAnimation";
import { secFading } from "../../utils/animation";

const ActivityChart: React.FC = () => {
    const [sec,controls] = useOnScrollAnimation();
  return (
    <motion.div ref={sec} initial="hidden" animate={controls} variants={secFading}>
      <h2 className="text-5xl text-gray-300 mb-10 mx-auto text-center mt-5">
        Coding Activity
      </h2>
      <p className="w-10/12">
        This chart just showing the TIME of TYPING code. So it not considering
        the time of thinking, searching at google, watching video about code or
        even reading the docs. Maybe multiply it by 2 or 3 can show my real
        coding activity.
      </p>
      <figure className="w-full  my-10 px-5 md:w-[768px]">
        <embed src="https://wakatime.com/share/@aly3n/28c1bd08-d655-4249-a17e-a985ff32f4d9.svg"></embed>
      </figure>
      <figure className="w-full  my-10 px-5 md:w-[768px]">
        <embed src="https://wakatime.com/share/@aly3n/d6968611-fd97-4c0d-8ba1-1fd7e69ba510.svg"></embed>
      </figure>
    </motion.div>
  );
};

export default ActivityChart;
