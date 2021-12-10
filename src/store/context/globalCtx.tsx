import { createContext, useState, useCallback } from "react";

type contextProps = {
  toCareer: number;
  toCareerHandler:(num:number)=>void;
  toGate:number;
  toGateHandler:(num:number)=>void;

};

export const GlobalCtx = createContext<contextProps>({
  toCareer: 0,
  toCareerHandler:(num:number):void=>{},
  toGate:0,
  toGateHandler:(num:number):void=>{},
});

export const GlobalCtxProvider: React.FC = (props) => {
  const [glob, setGlob] = useState({
    toCareer: 0,
    toGate:0,
  });
  const toCareerHandler = useCallback(
    (num: number): void => {
      setGlob((prevState) => ({ ...prevState, toCareer: num }));
    },
    [setGlob]
  );
  const toGateHandler = useCallback(
    (num: number): void => {
      setGlob((prevState) => ({ ...prevState, toGate: num }));
    },
    [setGlob]
  );

  const context: contextProps = {
    toCareer: glob.toCareer,
    toCareerHandler,
    toGate:glob.toGate,
    toGateHandler,
  };
  return (
    <GlobalCtx.Provider value={context}>{props.children}</GlobalCtx.Provider>
  );
};
