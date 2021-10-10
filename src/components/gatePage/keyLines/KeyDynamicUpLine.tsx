import { motion } from "framer-motion";
import { sportwaveAnimation } from "../../../utils/animation";
import { useGateHovered } from "../../../hooks/useGateHovered";

const KeyDynamicUpLine: React.FC = (): JSX.Element => {
  const controls = useGateHovered();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
    viewBox="250 200 1000 260"
    className="overflow-visible"
    >
      <g>
        <filter id="sofGlow1" height="300%" width="300%" x="-75%" y="-75%">
          {/* <!-- Thicken out the original shape --> */}
          <feMorphology
            operator="dilate"
            radius="9"
            in="SourceAlpha"
            result="thicken"
          />

          {/* <!-- Use a gaussian blur to create the soft blurriness of the glow --> */}
          <feGaussianBlur in="thicken" stdDeviation="10" result="blurred" >
          <animate
            attributeName="stdDeviation"
            from="5"
            to="8"
            dur="3s"
            repeatCount="indefinite"
            values="7; 10; 10; 7;"
            keyTimes="0; 0.33; 0.66; 1"

          />
          </feGaussianBlur>

          {/* <!-- Change the colour --> */}
          <feFlood floodColor="rgb(160,255,255)" result="glowColor" />

          {/* <!-- Color in the glows --> */}
          <feComposite
            in="glowColor"
            in2="blurred"
            operator="in"
            result="softGlow_colored"
          />



          {/* <!--	Layer the effects together --> */}
          <feMerge>
            <feMergeNode in="softGlow_colored" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
    
        </filter>
        <defs>
          <motion.path
            filter="url(#sofGlow1) url(#inset-shadow)"
            variants={sportwaveAnimation}
            initial="hidden"
            animate={controls}
            id="s-Path_1-d122488"
            d="M727.0 455.0 L570.5600343053175 229.82161234991406 L368.9373927958836 136.76500857632914"
          ></motion.path>
        </defs>
        <g>
          <use
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xlinkHref="#s-Path_1-d122488"
            fill="none"
            strokeWidth="55.0"
            stroke="#A0FFFF"
            strokeLinecap="square"
            filter="none"
          ></use>
        </g>
      </g>
    </svg>
  );
};

export default KeyDynamicUpLine;
