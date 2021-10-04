import UpLine from "./UpLine";
import MidLine from "./MidLine";

const LeftDoor: React.FC = (): JSX.Element => {
  return (
    <div className="bg-red-300/20 relative">
      <div className="cycle-1 absolute top-[25%] left-[80%] z-20 rounded-full w-80 h-80 bg-green-500"></div>
      <div>
        <UpLine />
      </div>
      <div className=" flex flex-col justify-center items-end">
        <div>
          <MidLine />
        </div>
        <div className="" style={{ transform: "scaleY(-1)" }}>
          <MidLine />
        </div>
      </div>
      <div className="" style={{ transform: "scaleY(-1)" }}>
        <UpLine />
      </div>
    </div>
  );
};

export default LeftDoor;
