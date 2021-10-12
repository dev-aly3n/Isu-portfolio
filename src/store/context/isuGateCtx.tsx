import { faTextWidth } from "@fortawesome/free-solid-svg-icons";
import { createContext, useState } from "react";

type contextProps = {
  isHovered: boolean;
  isClicked: boolean;
  keyAnimationFinished: boolean;
  doorAnimationFinished: boolean;
  hovering: (order: boolean) => void;
  clicking: (order: boolean) => void;
  keyFinishing: (order: boolean) => void;
  doorFinishing: (order: boolean) => void;
};

export const IsuGateCtx = createContext<contextProps>({
  isHovered: false,
  isClicked: false,
  keyAnimationFinished: false,
  doorAnimationFinished: false,
  hovering: (order: boolean): void => {},
  clicking: (order: boolean): void => {},
  keyFinishing: (order: boolean): void => {},
  doorFinishing: (order: boolean): void => {},
});

export const IsuGateCtxProvider: React.FC = (props) => {
  const [gate, setGate] = useState({
    isHovered: false,
    isClicked: false,
    keyAnimationFinished: false,
    doorAnimationFinished: false,
  });
  const hoverHandler = (order: boolean): void => {
    setGate((prev) => {
      return {
        ...prev,
        isHovered: order,
      };
    });
  };
  const clickHandler = (order: boolean): void => {
    setGate((prev) => {
      return {
        ...prev,
        isClicked: order,
      };
    });
  };
  const keyAnimationHandler = (order: boolean): void => {
    setGate((prev) => {
      return {
        ...prev,
        keyAnimationFinished: order,
      };
    });
  };
  const doorAnimationHandler = (order: boolean): void => {
    setGate((prev) => {
      return {
        ...prev,
        doorAnimationFinished: order,
      };
    });
  };
  const context: contextProps = {
    isHovered: gate.isHovered,
    isClicked: gate.isClicked,
    keyAnimationFinished: gate.keyAnimationFinished,
    doorAnimationFinished: gate.doorAnimationFinished,
    hovering: hoverHandler,
    clicking: clickHandler,
    keyFinishing: keyAnimationHandler,
    doorFinishing: doorAnimationHandler,
  };
  return (
    <IsuGateCtx.Provider value={context}>{props.children}</IsuGateCtx.Provider>
  );
};
