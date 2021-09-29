import LeftSign from "./LeftSign";
import LeftSignContainer from "./LeftSignContainer";

const Gate: React.FC = (): JSX.Element => {
  return (
    <div>
      <h1>open the Gate</h1>
      <div className="relative">
        <div className="absolute top-10 left-10 z-50">

      <LeftSign anim={true} />
        </div>
        <div className="absolute top-10 left-10">
      <LeftSignContainer anim={true} />
      </div>
      </div>
    </div>
  );
};

export default Gate;
