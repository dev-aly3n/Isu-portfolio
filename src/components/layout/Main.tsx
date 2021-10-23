import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Main: React.FC = (props) => {
  const router = useRouter();
  return (
    <AnimatePresence>
      <AnimateSharedLayout key={router.pathname}>
      <motion.main className="overflow-x-hidden" key={router.pathname}>{props.children}</motion.main>
      </AnimateSharedLayout>
    </AnimatePresence>
  );
};

export default Main;
