// libs
import { useState } from "react";
// components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
// hooks
// store
// utils & animation

interface props {
  education: { name: string; field: string; about: string; image: string };
}

const Edu: React.FC<props> = ({ education }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="flex flex-col my-3">
      <div
        className="flex justify-start items-center flex-wrap hover:cursor-pointer hover:bg-gray-500/10 duration-1000"
        onClick={() => setIsExpanded((prevState) => !prevState)}
      >
        <span className="text-3xl">
          <FontAwesomeIcon icon={faAngleRight} />{" "}
        </span>
        <img
          src={`/media/logos/${education.image}.png`}
          className="block w-[10vw]"
        />
        <div className="flex flex-col ml-2">
          <h3 className="text-2xl font-semibold mb-10">{education.name}</h3>
          <p>{education.field}</p>
        </div>
      </div>
      <div className="w-full h-1 bg-white" />
      <div
        className={`flex flex-col mx-2 my-3 px-5 overflow-hidden ${
          isExpanded ? "h-full" : "h-0"
        }`}
      >
        {education.about}
      </div>
    </div>
  );
};

export default Edu;
