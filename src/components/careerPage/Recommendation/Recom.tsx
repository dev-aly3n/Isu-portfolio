import { motion } from "framer-motion";
import { useOnScrollAnimation } from "../../../hooks/useOnScrollAnimation";
import { secFading } from "../../../utils/animation";

interface props {
    recom: {
        name: string;
        job: string;
        type: string;
        desc: string;
        image: string;
        url: string;
      }
}

const Recom:React.FC<props> = ({recom}) =>{
    const [sec, controls] = useOnScrollAnimation();
    return (
        <motion.a
        layout
        ref={sec}
        variants={secFading}
        initial="hidden"
        animate={controls}
        exit="out"
        href={recom.url} target="_blank" className="h-full w-full group">
        <div className="flex flex-col ssm:flex-row items-center ssm:items-start w-full h-full bg-primary-500/10 group-hover:bg-primary-500/40 duration-300 p-5 rounded-3xl gap-5">
        <img
          src={recom.image}
          className="w-28 h-28 rounded-full"
        />
      <div className="w-5/6 flex flex-col gap-1">
          <h4 className="text-xl font-medium text-center ssm:text-left">{recom.name}</h4>
          <h4 className="text-base font-normal">{recom.job}</h4>
        <p className="text-white/70 ">
          {recom.type}
        </p>
        <p className="text-sm mt-7">
          {recom.desc}
        </p>
      </div>
    </div>
    </motion.a>
    )
}
export default Recom;