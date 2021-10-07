import LeftDoor from "./LeftDoor";
import RightDoor from "./RightDoor";
import { useState, useCallback } from "react";


const Gate: React.FC = (): JSX.Element => {
  const [hoverKey, setHoverKey] = useState(false);
  const hoveredKey = useCallback(
    (order:boolean) => {
      setHoverKey(order)
    },
    [setHoverKey],
  )

  return (
    <div className="flex flex-col justify-center items-center mx-auto w-screen h-screen ">
      <div className="flex flex-row items-center justify-center w-full h-full">
        <LeftDoor  />
        <RightDoor />
      </div>
    </div>
  );
};

export default Gate;
