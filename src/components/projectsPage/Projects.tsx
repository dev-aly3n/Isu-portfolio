// libs
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
// components
import Proj from "./Proj";
// hooks
// store
import { projectList } from "../../store/allData";
import LiveProject from "./LiveProject";
// utils & animation

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
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

  // To have a nice transition between two component we need to wrap <AnimatePresence></AnimatePresence> around the destination component
  // ... and wrap <AnimateSharedLayout></AnimateSharedLayout> around both destination and origin component
  // ... after that we just need to give them same layout id
  // ... here LiveProject is destination and proj is origin
  return (
    <div
      ref={projectsRef}
      className="flex flex-col justify-between items-center h-full w-full py-5 overflow-hidden"
    >
      <AnimateSharedLayout>
        <AnimatePresence>
          {urlID && (
            <motion.div
              layoutId={urlID}
              className="live-project-container !overscroll-y-contain"
            >
              <LiveProject
                projectsRef={projectsRef}
                settingID={settingID}
                iframeRef={iframeRef}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="w-full h-full flex flex-wrap gap-5 justify-center items-center mt-3">
          {projectList.map((project) => {
            return (
              <Proj
                key={project.url}
                project={project}
                projectsRef={projectsRef}
                settingID={settingID}
              />
            );
          })}
        </div>
      </AnimateSharedLayout>
    </div>
  );
};

export default Projects;
