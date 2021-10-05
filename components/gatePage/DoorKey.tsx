import {motion} from 'framer-motion';

const doorAnimation = {
    hidden: { transform:"rotate(0deg)" },
    visable: {
        transform:"rotate(5000deg)",

      transition: { duration: 1, delay: 0, ease: [0.12, 0.35, 0.9, 1.05] },
    },
}


const DoorKey: React.FC = (): JSX.Element => {
  return (
    <div className="cycle-1 absolute left-full ml-[-15vw] top-1/2 mt-[-15vw] z-20 rounded-full w-[30vw] h-[30vw] flex justify-center items-center">
      <motion.img src="/door1.png" alt="" className="w-full h-full z-40 absolute top-1/2 left-1/2 mt-[-50%] ml-[-50%]" 
      variants={doorAnimation}
      initial="hidden"
      animate="visable"
      />
      <div className="w-[22vw] h-[22vw] rounded-full bg-gray-500 z-50">
      </div>
    </div>
  );
};

export default DoorKey;
