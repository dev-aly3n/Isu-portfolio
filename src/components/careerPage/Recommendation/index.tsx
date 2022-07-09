import { motion } from "framer-motion";

const Recommendation: React.FC = () => {
  return (
    <div>
      <motion.h2 layout>Recommendations</motion.h2>
      <div className=" flex w-9/12 h-full bg-primary-500/20 p-5 rounded-3xl gap-5">
          <img
            src={"/media/recom/hamidreza.jpg"}
            className="w-28 h-28 rounded-full"
          />
        <div className="w-5/6 flex flex-col">
            <h4 className="text-xl font-normal">HamidRea moradi</h4>
            <h4 className="text-base font-normal">blockchain developer</h4>
          <p className="text-white/70 ">
            Hamidreza and Ali worked in the same team
          </p>
          <p className="text-sm mt-3">
            Aly is one of the best among all people I have ever met and is a
            loyal colleague, understands complex matters. Aly is a strong and
            goal oriented team player; with every problem there was a solution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
