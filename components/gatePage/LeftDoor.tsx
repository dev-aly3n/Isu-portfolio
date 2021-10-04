import UpLine from "./UpLine";
import MidLine from "./MidLine";
import PhLine from "./PhLine";
import DoorKey from "./DoorKey";

const LeftDoor: React.FC = (): JSX.Element => {
  return (
    <div className=" w-1/2 h-full relative">
      <img src="/gate1.jpg" className="w-full h-screen object-right" />

      <DoorKey />
        <div className="absolute top-0 right-0 w-36 h-[50vh]  overflow-hidden">
          <PhLine />
        </div>
        <div className="absolute bottom-0 right-0 w-36 h-[50vh]  overflow-hidden" style={{ transform: "scaleY(-1)" }}>
          <PhLine />
        </div>
      <div className="flex flex-col absolute top-1/2 mt-[-40%] right-0 w-full">
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
