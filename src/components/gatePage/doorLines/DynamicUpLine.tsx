import { motion } from "framer-motion";
import { sportwaveAnimation } from "../../../utils/animation";

const DynamicUpLine: React.FC = (): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="359 207 812 243"
    className="overflow-visible"
    >
      <g>
        <filter id="sofGlow" height="300%" width="300%" x="-75%" y="-75%">
          {/* <!-- Thicken out the original shape --> */}
          <feMorphology
            operator="dilate"
            radius="3"
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
          <feFlood floodColor="rgb(0,186,255)" result="glowColor" />

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
            filter="url(#sofGlow)"
            variants={sportwaveAnimation}
            initial="hidden"
            animate="visable"
            id="s-Path_1-d1224"
            d="M1171.0 450.0 L824.3507718696401 315.82847341337913 L735.5240137221272 362.35677530017153 L360.4777015437396 208.6723842195541 "
          ></motion.path>
        </defs>
        <g>
          <use
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xlinkHref="#s-Path_1-d1224"
            fill="none"
            strokeWidth="20.0"
            stroke="#16FBFF"
            strokeLinecap="square"
            filter="none"
          ></use>
        </g>
      </g>
    </svg>
  );
};

export default DynamicUpLine;
