import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Main: React.FC = (props) => {
  const router = useRouter();
  return (
    <main className="overflow-x-hidden">
    <AnimatePresence>
      <AnimateSharedLayout key={router.pathname}>
      <motion.main key={router.pathname}>{props.children}</motion.main>
      </AnimateSharedLayout>
    </AnimatePresence>
    </main>
  );
};

export default Main;
