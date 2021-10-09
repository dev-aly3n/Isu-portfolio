import { createContext, useState } from "react";

type contextProps = {
  isHovered: boolean;
  isClicked: boolean;
};

export const IsuGateCtx = createContext<Partial<contextProps>>({
  isHovered: false,
  isClicked: false,
});

export const IsuGateCtxProvider: React.FC = (props) => {
  const [gate, setGate] = useState({ isHovered: false, isClicked: false });
  const context: contextProps = {
    isHovered: gate.isHovered,
    isClicked: gate.isClicked,
  };
  const hoverHandler = () =>{}
  return (
    <IsuGateCtx.Provider value={context}>{props.children}</IsuGateCtx.Provider>
  );
};
