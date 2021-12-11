// libs
import { RefObject } from "react";
import { motion } from "framer-motion";
// components
import Contact from "./Contact";
// hooks
import { useOnScrollAnimation } from "../../hooks/useOnScrollAnimation";
// store
import { contactList } from "../../store/allData";
import { secFading } from "../../utils/animation";
// utils & animation

interface props {
  contactRef: RefObject<HTMLDivElement>;
}

const Contacts: React.FC<props> = ({ contactRef }) => {
  const [sec, controls] = useOnScrollAnimation();
  return (
    <div ref={contactRef}>
      <h2>Contacts</h2>
      <motion.div
        ref={sec}
        initial="hidden"
        animate={controls}
        variants={secFading}
        className="flex flex-wrap justify-center items-center w-full"
      >
        {contactList.map((cont) => {
          return <Contact key={cont.logo} contact={cont} />;
        })}
      </motion.div>
    </div>
  );
};

export default Contacts;
