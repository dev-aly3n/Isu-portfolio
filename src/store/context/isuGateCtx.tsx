import { createContext, useState } from "react";

type contextProps = {
  isHovered: boolean;
  isClicked: boolean;
  keyAnimationFinished: boolean;
  hovering: (order: boolean) => void;
  clicking: (order: boolean) => void;
  keyFinishing: (order:boolean) => void;
};

export const IsuGateCtx = createContext<contextProps>({
  isHovered: false,
  isClicked: false,
  keyAnimationFinished: false,
  hovering: (order: boolean): void => {},
  clicking: (order: boolean): void => {},
  keyFinishing: (order: boolean): void => {},
});

export const IsuGateCtxProvider: React.FC = (props) => {
  const [gate, setGate] = useState({
    isHovered: false,
    isClicked: false,
    keyAnimationFinished: false,
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
  const keyAnimationHandler = (order:boolean): void => {
    setGate((prev) => {
      return {
        ...prev,
        keyAnimationFinished: order,
      };
    });
  };
  const context: contextProps = {
    isHovered: gate.isHovered,
    isClicked: gate.isClicked,
    keyAnimationFinished: gate.keyAnimationFinished,
    hovering: hoverHandler,
    clicking: clickHandler,
    keyFinishing: keyAnimationHandler,
  };
  return (
    <IsuGateCtx.Provider value={context}>{props.children}</IsuGateCtx.Provider>
  );
};
