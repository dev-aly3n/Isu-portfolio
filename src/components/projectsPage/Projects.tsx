import { useCallback, useEffect, useRef, useState } from "react";
import Proj from "./Proj";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useRouter } from "next/router";

const Projects: React.FC = () => {
  const router = useRouter();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [urlID, setUrlID] = useState<null | string | string[] | undefined>(router.query.ID);
  const settingID = useCallback(
      (iframeID: string | null) => {
          setUrlID(iframeID);
        },
        [setUrlID]
        );
        useEffect(() => {
            if(window.history?.state.url.includes("projects?ID")){
                console.log("window.history")
            }
    if (urlID) {
      iframeRef.current!.src = `https://${urlID}/`;
    }
    console.log(urlID)
}, [urlID]);
  return (
    <div className="flex flex-col justify-between items-center h-full w-full pb-96">
      <AnimateSharedLayout>
        <AnimatePresence>
          {urlID && (
            <motion.div
              layoutId={"iframe"}
              className="fixed top-0 left-0 w-screen h-screen flex flex-col justify-between z-100"
            >
              <div
                onClick={() => {
                  setUrlID(null);
                  window.history.pushState(null, "", "/projects");
                }}
                className="h-16 w-full bg-green-900 "
              ></div>
              <div className="w-full h-full bg-red-500 ">
                <iframe ref={iframeRef} src="" className="w-full h-full" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="w-full h-full flex flex-wrap gap-5 justify-center items-center mt-3">
          <Proj settingID={settingID} />
        </div>
      </AnimateSharedLayout>
    </div>
  );
};

export default Projects;
