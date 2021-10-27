//libs
import { useContext } from "react";
//store
import { IsuGateCtx } from "../../store/context/isuGateCtx";
//components
import KeyUpLine from "./keyLines/KeyUpLine";
import KeyMidLine from "./keyLines/KeyMidLine";
import KeyDynamicUpLine from "./keyLines/KeyDynamicUpLine";
import KeyDynamicMidLine from "./keyLines/KeyDynamicMidLine";
import LightKey from "./LightKey";
//hooks

const DoorKey: React.FC = (): JSX.Element => {
  const gateCtx = useContext(IsuGateCtx);

  const keyMouseOverHandler = () => {
    if (!gateCtx.isClicked) {
      gateCtx.hovering(true);
    }
  };
  const keyMouseLeaveHandler = () => {
    if (!gateCtx.isClicked) {
      gateCtx.hovering(false);
    }
  };
  const keyClickHandler = () => {
    gateCtx.clicking(true);
  };
  return (
    <div
      onMouseOver={keyMouseOverHandler}
      onMouseLeave={keyMouseLeaveHandler}
      onClick={keyClickHandler}
      className={`door-key-container group ${
        gateCtx.isClicked ? "rotate-0 !-translate-y-0 !scale-100" : ""
      } `}
    >
      <LightKey />
      <div>
        <div
          className={`group-hover:rotate-0 
          ${gateCtx.isClicked ? "!rotate-0" : ""}`}
          style={{
            boxShadow: `${
              gateCtx.isHovered
                ? "0px 0px 10px 2px rgba(0,0,0,0.7)"
                : "0px 0px 10px 5px rgba(0,0,0,0.7)"
            }`,
          }}
        >
          <div>
            Open
            <br />
            The
            <br />
            Gate
          </div>
        </div>
        <div>
          <div>
            <KeyUpLine />
            <div>
              <KeyDynamicUpLine
                logic={true}
                setFinished={gateCtx.keyFinishing}
                clicked={gateCtx.isClicked}
                impacting={gateCtx.impacting}
              />
            </div>
          </div>
          <div style={{ transform: "scaleY(-1)" }}>
            <KeyMidLine />
            <div>
              <KeyDynamicMidLine />
            </div>
          </div>
          <div style={{ transform: "scaleY(-1)" }}>
            <KeyUpLine />
            <div>
              <KeyDynamicUpLine />
            </div>
          </div>
        </div>
        <div style={{ transform: "scaleX(-1)" }}>
          <div>
            <KeyUpLine />
            <div>
              <KeyDynamicUpLine />
            </div>
          </div>
          <div style={{ transform: "scaleY(-1)" }}>
            <KeyMidLine />
            <div>
              <KeyDynamicMidLine />
            </div>
          </div>
          <div style={{ transform: "scaleY(-1)" }}>
            <KeyUpLine />
            <div>
              <KeyDynamicUpLine />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoorKey;
