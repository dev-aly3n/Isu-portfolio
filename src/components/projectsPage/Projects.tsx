// libs
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
// components
import Proj from "./Proj";
// hooks
// store
import {projectList} from '../../store/allData';
// utils & animation

const Projects: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [urlID, setUrlID] = useState<null | string>(null);
  const settingID = useCallback(
    (iframeID: string | null) => {
      setUrlID(iframeID);
    },
    [setUrlID]
  );

  useEffect(() => {
    if (window.history?.state?.as?.includes("projects?ID")) {
      let id = window.history?.state.as.split("/projects?ID=")[1];
      setUrlID(id);
    }
    if (urlID) {
      iframeRef.current!.src = `https://${urlID}/`;
    }
  }, [urlID]);
  return (
    <div className="flex flex-col justify-between items-center h-full w-full pb-96">
      <AnimateSharedLayout>
        <AnimatePresence>
          {urlID && (
            <motion.div
              layoutId={urlID}
              className="fixed top-0 left-0 w-screen h-screen flex flex-col justify-between z-100"
            >
              <div
                onClick={() => {
                  setUrlID(null);
                  window.history.pushState({}, "", "/projects");
                }}
                className="h-16 w-full bg-green-900 "
              ></div>
              <div className="w-full h-full bg-red-500 opacity-25 ">
                <iframe ref={iframeRef} src="" className="w-full h-full" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="w-full h-full flex flex-wrap gap-5 justify-center items-center mt-3">
          { projectList.map((project)=>{
              return <Proj key={project.url} project={project} settingID={settingID} />;
          })}
        </div>
      </AnimateSharedLayout>
    </div>
  );
};

export default Projects;
