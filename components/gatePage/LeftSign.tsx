import { motion } from "framer-motion";

interface SignProps {
  anim: boolean;
}

const LeftSign: React.FC<SignProps> = ({ anim }): JSX.Element => {
  const sportwaveAnimation = {
    hidden: { pathLength: 0, pathOffset: 0 },
    visable: {
      pathLength: 1,
      pathOffset: 0,
      transition: { duration: 3, delay: 0},
    },
  };
  return (
        <svg
        width="150.18457mm"
        height="250.05449mm"
        viewBox="-4.9 -2.3 150.18457 250.05449"
        version="1.1"
        id="svg56"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs id="defs23" />
        <g id="layer12" transform="translate(142.04863,-41.564753)">
          <motion.path
                      variants={sportwaveAnimation}
                      initial="hidden"
                      animate="visable"
            style={{
              fill: "none",
              stroke: "#fff",
              strokeWidth: "2",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeOpacity: 1,
            }}
            d="m -141.55049,67.666255 -0.36576,113.386695 10.60714,23.40887 V 85.58867 l 7.68103,34.74754 -0.36576,98.39039 17.92241,31.82143 c -0.68613,-54.86601 -1.29599,-105.84195 -2.9261,-208.850986 h 47.18349 l 1.828819,76.810346 -32.918717,-2.56035 76.444579,95.83005 1.463054,51.93843"
            id="path42"
          />
        </g>
      </svg>
  );
};

export default LeftSign;
