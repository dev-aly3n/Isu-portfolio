import LeftDoor from "./LeftDoor";
import RightDoor from "./RightDoor";
import { useState, useCallback } from "react";
import { IsuGateCtxProvider } from "../../store/context/isuGateCtx";
import { AnimatePresence } from "framer-motion";

const Gate: React.FC = (): JSX.Element => {

  return (
    <IsuGateCtxProvider>
      <AnimatePresence>
      <div className="flex flex-col justify-center items-center mx-auto w-screen h-screen ">
        <div className="flex flex-row items-center justify-center w-full h-full">
          <LeftDoor />
          <RightDoor />
        </div>
      </div>
      </AnimatePresence>
    </IsuGateCtxProvider>
  );
};

export default Gate;
