import { useCallback, useRef, useState } from "react";
import Proj from "./Proj";

const Projects: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeExpanded, setIframeExpanded] = useState(false);

  const ifrExpanding = useCallback(
    (isExpanded: boolean) => {
      setIframeExpanded(isExpanded);
    },
    [setIframeExpanded]
  );
  return (
    <div className="flex flex-col justify-between items-center h-full w-full pb-96">
        <div className={`fixed top-0 left-0 w-screen h-screen flex flex-col justify-between z-100
        ${iframeExpanded ? "":"hidden"}`}>
          <div className="h-16 w-full bg-green-900 "></div>
          <div className="w-full h-full bg-red-500 ">
            <iframe ref={iframeRef} src="" className="w-full h-full" />
          </div>
        </div>
      <div className="w-full h-full flex flex-wrap gap-5 justify-center items-center mt-3">
        <Proj iframeRef={iframeRef} ifrExpanding={ifrExpanding} />
      </div>
    </div>
  );
};

export default Projects;
