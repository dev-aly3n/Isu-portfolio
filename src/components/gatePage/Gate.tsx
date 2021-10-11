import LeftDoor from "./LeftDoor";
import RightDoor from "./RightDoor";
import { useState, useCallback } from "react";
import { IsuGateCtxProvider } from "../../store/context/isuGateCtx";
import { AnimatePresence } from "framer-motion";

const Gate: React.FC = (): JSX.Element => {
  return (
    <IsuGateCtxProvider>
      <AnimatePresence>
        <div className="flex flex-col justify-center items-center mx-auto w-screen h-screen overflow-hidden">
          <div className="flex flex-row items-center justify-between w-full h-full">
            <div
              className="w-1/2 h-full"
              style={{
                perspective: "500px",
                perspectiveOrigin: "left",
              }}
            >
              <LeftDoor />
            </div>
            <div
              className="w-1/2 h-full"
              style={{ perspective: "500px", perspectiveOrigin: "right" }}
            >
              <RightDoor />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </IsuGateCtxProvider>
  );
};

export default Gate;
