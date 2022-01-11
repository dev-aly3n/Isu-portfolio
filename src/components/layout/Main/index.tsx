import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import ToGateSubmission from "../../ToGateSubmission";

const Main: React.FC = (props) => {
  const router = useRouter();
  return (
    <AnimatePresence>
      <AnimateSharedLayout key={router.pathname}>
      <motion.main  className="overflow-hidden" key={router.pathname}>
        {props.children}
        <ToGateSubmission />
        </motion.main>
      </AnimateSharedLayout>
    </AnimatePresence>
  );
};

export default Main;
