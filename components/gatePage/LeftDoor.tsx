import UpLine from "./UpLine";
import MidLine from "./MidLine";

const LeftDoor: React.FC = (): JSX.Element => {
  return (
    <div className=" w-1/2 h-full relative">
      <img src="/gate1.jpg" className="w-full h-screen object-right" />

      <div className="cycle-1 absolute left-full ml-[-160px] top-1/2 mt-[-160px] z-20 rounded-full w-80 h-80 bg-green-500/50"></div>
      <div className="flex flex-col absolute top-1/2 mt-[-326px] right-0 w-full">
        <div>
          <UpLine />
        </div>
        <div className=" flex flex-col">
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
    </div>
  );
};

export default LeftDoor;
