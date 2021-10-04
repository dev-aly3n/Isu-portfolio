import LeftDoor from "./LeftDoor";
import RightDoor from "./RightDoor";

const Gate: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-row items-center justify-center">
        <LeftDoor />
        <RightDoor />
      </div>
    </div>
  );
};

export default Gate;
