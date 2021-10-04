import UpLine from "./UpLine";
import MidLine from "./MidLine";

const LeftDoor: React.FC = (): JSX.Element => {
  return (
    <div className=" bg-blue-300/20" style={{ transform: "scaleX(-1)" }}>
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
