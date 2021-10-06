import UpLine from "./doorLines/UpLine";
import MidLine from "./doorLines/MidLine";
import PhLine from "./doorLines/PhLine";
import DoorKey from "./DoorKey";
import DynamicUpLine from "./doorLines/DynamicUpLine";
import DynamicMidLine from "./doorLines/DynamicMidLine";
import DynamicPhLine from './doorLines/DynamicPhLine'

const LeftDoor: React.FC = (): JSX.Element => {
  return (
    <div className=" w-1/2 h-full relative">
      <img src="/gate1.jpg" className="w-full h-screen object-right" />

      <DoorKey />
      <div className="absolute top-0 right-0 w-36 h-[50vh]">
        <PhLine />
      </div>
      <div className="absolute top-0 right-0 w-36 h-[50vh]">
        <DynamicPhLine />
      </div>
      <div
        className="absolute bottom-0 right-0 w-36 h-[50vh]"
        style={{ transform: "scaleY(-1)" }}
      >
        <PhLine />
      </div>
      <div
        className="absolute bottom-0 right-0 w-36 h-[50vh]"
        style={{ transform: "scaleY(-1)" }}
      >
        <DynamicPhLine />
      </div>
      <div className="flex flex-col absolute top-1/2 mt-[-40%] right-0 w-full">
        <div className="relative">
          <UpLine />
          <div className="absolute top-0 left-0 w-full h-full">
            <DynamicUpLine />
          </div>
        </div>
          <div className="relative">
            <MidLine />
            <div className="absolute top-0 left-0 w-full h-full ">
              <DynamicMidLine />
            </div>
          </div>
          <div className="relative" style={{ transform: "scaleY(-1)" }}>
            <MidLine />
            <div className="absolute top-0 left-0 w-full h-full">
              <DynamicMidLine />
            </div>
          </div>
        <div className="relative" style={{ transform: "scaleY(-1)" }}>
          <UpLine />
          <div className="absolute top-0 left-0 w-full h-full">
            <DynamicUpLine />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftDoor;
