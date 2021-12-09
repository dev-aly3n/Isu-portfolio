import { createContext, useState, useCallback, useEffect } from "react";

type contextProps = {
  toCareer: number;
  toCareerHandler:(num:number)=>void;
};

export const GlobalCtx = createContext<contextProps>({
  toCareer: 0,
  toCareerHandler:(num:number):void=>{},
});

export const GlobalCtxProvider: React.FC = (props) => {
  const [glob, setGlob] = useState({
    toCareer: 0,
  });
  const toCareerHandler = useCallback(
    (num: number): void => {
      setGlob((prevState) => ({ ...prevState, toCareer: num }));
    },
    [setGlob]
  );

  const context: contextProps = {
    toCareer: glob.toCareer,
    toCareerHandler,
  };
  return (
    <GlobalCtx.Provider value={context}>{props.children}</GlobalCtx.Provider>
  );
};
