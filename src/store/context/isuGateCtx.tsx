import { createContext, useState } from "react";

type contextProps = {
  isHovered: boolean;
  isClicked: boolean;
  hovering: (order: boolean) => void;
  clicking: (order: boolean) => void;
};

export const IsuGateCtx = createContext<contextProps>({
  isHovered: false,
  isClicked: false,
  hovering: (order: boolean): void => {},
  clicking: (order: boolean): void => {},
});

export const IsuGateCtxProvider: React.FC = (props) => {
  const [gate, setGate] = useState({ isHovered: false, isClicked: false });
  const hoverHandler = (order: boolean): void => {
    setGate({
      ...gate,
      isHovered: order,
    });
  };
  const clickHandler = (order: boolean): void => {
    setGate({
      ...gate,
      isClicked: order,
    });
  };
  const context: contextProps = {
    isHovered: gate.isHovered,
    isClicked: gate.isClicked,
    hovering: hoverHandler,
    clicking: clickHandler,
  };
  return (
    <IsuGateCtx.Provider value={context}>{props.children}</IsuGateCtx.Provider>
  );
};
