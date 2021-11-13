import React from "react";
import { motion } from "framer-motion";
import { firstPage } from "../../utils/animation";
import HeaderImg from "./HeaderImg";
const Career: React.FC = (): JSX.Element => {

  return (
    <motion.div layout initial="hidden" animate="visible" variants={firstPage} exit="out"
    className=" w-full h-full bg-secondary-800 text-white flex flex-col justify-between">
      {/* first */}
  <HeaderImg/>

      {/* second */}
      <div className="flex relative w-full h-full p-10">
        
      <p>Aly Mohamadi was born at 1998 at Iran. there is nothing fancy about his family, just a regular one with all problems in the world that a family could has.
        anyway he raised and at the very old day at school he watched the movie of "October Sky" that had been made base on a real story of a book, Rocket Boys.
        story is about the life of its author Hoomer Hickam. he was born in very fucked up town that all who born there, will be miner eventually.
        but Hoomer after all doesn't give up and trying to reach to his dream, being a rocket boy and working in NASA. so it's all and this is what happened to very young Aly 
        he started dreaming about it and he tried to be a rocket boy but in Iran?! his place was more fucked up than Hoomer's town. he tried to start with cheaper stuff so made some water rocket
        tried to improve them but you know what? he couldn't find a hand-pump that can survive in 20 bar pressure (about 20 times of atmosphere). yes I know you can't believe it. but it's true.
        why? because this country of mullahs has been boycotted. so Aly hadn't the stuff that his friend Julian bought from a store besides of his home at Germany.
        anyway he tried even cheaper, Aly create a magazine about Aerospace and named it ASPAD. he worked on it days and nights. he even set an interview with Hoomer Hickam that eventually hoomer answered his question very kindly.
        but you know free volunteering works in a country that falling to bottom of poverty is not working. so it's the time for new chapter. he start thinking about coding. he searched for the job offers. Aly needed inspiring to start it.
        so he found it. inspired by growing of this industry and how creativity that he can put on it. so he started to learn. he learned html css and js from w3school. I know I know such a nice place for learning nothing. he wasted one year on w3school besides of his study of aerospace.
        but after a year he found out that there is better materials and started to learn from an iranian teacher and please let me bang my head against the wall. that was horrible. but one day he searched how to build a nav bar css js and he found a guy whose name was Dev Ed on Youtube. Aly loved his course and his talking English.
        so searched about this guy and found his courses about js. so he started learning again. working on his code for days and nights with ultimate creativity that he had. how ever he has so much problem </p>
      </div>

    </motion.div>
  );
};

export default Career;
