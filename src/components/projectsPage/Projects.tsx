// libs
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
// components
import Proj from "./Proj";
// hooks
// store
import { projectList } from "../../store/allData";
import LiveProject from "./LiveProject";
import { seconPage } from "../../utils/animation";
import Footer from "../layout/Footer";
// utils & animation

const Projects: React.FC = () => {
  const projectsPageRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [urlID, setUrlID] = useState<{
    ID: string | null;
    gitHub: string | null;
  }>({ ID: null, gitHub: null });
  const settingID = useCallback(
    (iframeID: string | null, github: string | null) => {
      setUrlID({ ID: iframeID, gitHub: github });
    },
    [setUrlID]
  );

  useEffect(() => {
    if (window.history?.state?.as?.includes("projects?ID")) {
      let id = window.history?.state.as.split("?ID=")[1];
      let gh = window.history?.state.as.split("?ID=")[2];
      setUrlID({ ID: id, gitHub: gh });
      projectsPageRef.current!.style.zIndex = "100";
    }
    if (urlID.ID) {
      iframeRef.current!.src = `https://${urlID.ID}/`;
      projectsPageRef.current!.style.zIndex = "100";
    }
  }, [urlID.ID]);

  // To have a nice transition between two component we need to wrap <AnimatePresence></AnimatePresence> around the destination component
  // ... and wrap <AnimateSharedLayout></AnimateSharedLayout> around both destination and origin component
  // ... after that we just need to give them same layout id
  // ... here LiveProject is destination and proj is origin
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="out"
      variants={seconPage}
      className="projects-container"
      ref={projectsPageRef}
    >
      <motion.div ref={projectsRef}>
        <AnimateSharedLayout>
          <AnimatePresence>
            {urlID.ID && (
              <motion.div
                layoutId={urlID.ID}
                className="live-project-container"
              >
                <LiveProject
                  projectsPageRef={projectsPageRef}
                  projectsRef={projectsRef}
                  urlID={urlID}
                  settingID={settingID}
                  iframeRef={iframeRef}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="proj-list">
            {projectList.map((project) => {
              return (
                <Proj
                  key={project.url}
                  project={project}
                  settingID={settingID}
                />
              );
            })}
            <span>
              <Footer />
            </span>
          </div>
        </AnimateSharedLayout>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
