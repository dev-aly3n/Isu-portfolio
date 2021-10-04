import LeftDoor from "./LeftDoor";
import RightDoor from "./RightDoor";

const Gate: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto w-screen h-screen overflow-hidden">
      <div className="flex flex-row items-center justify-center w-full h-full">
        <LeftDoor />
        <RightDoor />
      </div>
    </div>
  );
};

export default Gate;
