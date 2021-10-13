import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Main: React.FC = (props) => {
  const router = useRouter();
  return (
    <AnimatePresence >
      <motion.main key={router.pathname}>{props.children}</motion.main>
    </AnimatePresence>
  );
};

export default Main;
