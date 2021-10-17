import { motion } from "framer-motion";

const PhLine: React.FC = (): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="227 26 250 900"
      className="overflow-visible"
    >
      <g>
        <defs>
          <pattern
            id="pat3"
            patternUnits="userSpaceOnUse"
            width="1500"
            height="1500"
          >
            <image xlinkHref="/gate1.jpg" width="1500" height="1500" />
          </pattern>
          <motion.path
            filter="url(#inset-shadow4)"
            id="s-Path_1-d122469"
            d="M229.0 28.0 L320.99914236706695 258.0205831903945 L291.3902229845627 325.6981132075472 L429.565180102916 355.30703259005145 L381.62692967409953 413.11492281303606 L473.2735849056605 597.818181818182 "
          ></motion.path>
        </defs>
        <g>
          <use
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xlinkHref="#s-Path_1-d122469"
            fill="none"
            className="stroke-[15px] sm:stroke-[20px] md:stroke-[30px] lg:stroke-[40px]"
            stroke="url(#pat3)"
            strokeLinecap="square"
            filter="none"
          ></use>
        </g>
      </g>
    </svg>
  );
};

export default PhLine;
