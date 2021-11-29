import { createContext, useState, useCallback } from "react";

type contextProps = {
  isHovered: boolean;
  isClicked: boolean;
  keyAnimationFinished: boolean;
  doorAnimationFinished: boolean;
  impact: boolean;
  hovering: (order: boolean) => void;
  clicking: (order: boolean) => void;
  keyFinishing: (order: boolean) => void;
  doorFinishing: (order: boolean) => void;
  impacting: () => void;
};

export const IsuGateCtx = createContext<contextProps>({
  isHovered: false,
  isClicked: false,
  keyAnimationFinished: false,
  doorAnimationFinished: false,
  impact: false,
  hovering: (order: boolean): void => {},
  clicking: (order: boolean): void => {},
  keyFinishing: (order: boolean): void => {},
  doorFinishing: (order: boolean): void => {},
  impacting: (): void => {},
});

export const IsuGateCtxProvider: React.FC = (props) => {
  const [gate, setGate] = useState({
    isHovered: false,
    isClicked: false,
    keyAnimationFinished: false,
    doorAnimationFinished: false,
    impact: false,
  });
  const hoverHandler = useCallback(
    (order: boolean): void => {
      setGate((prev) => {
        return {
          ...prev,
          isHovered: order,
        };
      });
    },
    [setGate]
  );
  const clickHandler = useCallback(
    (order: boolean): void => {
      setGate((prev) => {
        return {
          ...prev,
          isClicked: order,
        };
      });
    },
    [setGate]
  );
  const keyAnimationHandler = useCallback(
    (order: boolean): void => {
      setGate((prev) => {
        return {
          ...prev,
          keyAnimationFinished: order,
        };
      });
    },
    [setGate]
  );
  const doorAnimationHandler = useCallback(
    (order: boolean): void => {
      setGate((prev) => {
        return {
          ...prev,
          doorAnimationFinished: order,
        };
      });
    },
    [setGate]
  );
  const impactHandler = useCallback((): void => {
    setGate((prev) => {
      return {
        ...prev,
        impact: !prev.impact,
      };
    });
  }, [setGate]);
  const context: contextProps = {
    isHovered: gate.isHovered,
    isClicked: gate.isClicked,
    keyAnimationFinished: gate.keyAnimationFinished,
    doorAnimationFinished: gate.doorAnimationFinished,
    impact: gate.impact,
    hovering: hoverHandler,
    clicking: clickHandler,
    keyFinishing: keyAnimationHandler,
    doorFinishing: doorAnimationHandler,
    impacting: impactHandler,
  };
  return (
    <IsuGateCtx.Provider value={context}>{props.children}</IsuGateCtx.Provider>
  );
};
