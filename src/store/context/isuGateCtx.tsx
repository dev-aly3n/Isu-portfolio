import { createContext } from "react";

type contextProps = {
  isHovered: boolean;
  isClicked: boolean;
};

export const IsuGateCtx = createContext<Partial<contextProps>>({
  isHovered: false,
  isClicked: false,
});

export const IsuGateCtxProvider: React.FC = (props) => {
  const context: contextProps = { isHovered: false, isClicked: false };
  return (
    <IsuGateCtx.Provider value={context}>{props.children}</IsuGateCtx.Provider>
  );
};
