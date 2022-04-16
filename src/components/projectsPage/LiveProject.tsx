import { RefObject, Fragment, useCallback, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faTabletAlt,
  faDesktop,
  faExternalLinkAlt,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt, faResearchgate } from "@fortawesome/free-brands-svg-icons";
import { projectType } from "../../types/allTypes";
interface props {
  urlID: { ID: string | null; gitHub: string | null };
  settingID: (id: null | string, git: string | null) => void;
  iframeRef: RefObject<HTMLDivElement>;
  projectsRef: RefObject<HTMLDivElement>;
  projectsPageRef: RefObject<HTMLDivElement>;
  activeData:projectType | undefined;
}
const LiveProject: React.FC<props> = ({
  iframeRef,
  urlID,
  settingID,
  projectsPageRef,
  activeData
}) => {
  const [selected, setSelected] = useState<number | null>(null);

  const closeHandler = () => {
    settingID(null, null);
    window.history.pushState({}, "", "/projects");
    projectsPageRef.current!.style.zIndex = "50";
  };

  const externalLinkHandler = () => {
    window.open(`https://${urlID.ID}/`);
  };
  const githubHandler = () => {
    window.open(`https://${urlID.gitHub}/`);
  };

  const resizeHandler = useCallback((size: number) => {
    const viewPortWidth: number = window.outerWidth;
    const viewPortHeight: number = window.outerHeight;
    if (size <= viewPortWidth) {
      iframeRef.current!.style.width = `${size}px`;
      iframeRef.current!.style.transform = `scale(1)`;
    } else {
      const scaleRate: number = viewPortWidth / size;
      iframeRef.current!.style.width = `${size}px`;
      iframeRef.current!.style.transform = `scale(${scaleRate})`;
      iframeRef.current!.style.height = `${
        (viewPortHeight - 50) / scaleRate
      }px`;
    }
    iframeRef.current!.setAttribute("sizeID", `${size}`);
    setSelected(size);
  }, []);
  // 320 + 30 = 350 . 30 px is the scrollbar width
  return (
    <Fragment>
      <div className="header">
        <div>
          {/* <span
            onClick={() => resizeHandler(350)}
            className={`${selected === 350 ? "active" : ""}`}
          >
            <FontAwesomeIcon icon={faMobileAlt} />
          </span>
          <span
            onClick={() => resizeHandler(798)}
            className={`${selected === 798 ? "active" : ""}`}
          >
            <FontAwesomeIcon icon={faTabletAlt} />
          </span>
          <span
            onClick={() => resizeHandler(1310)}
            className={`${selected === 1310 ? "active" : ""}`}
          >
            <FontAwesomeIcon icon={faDesktop} />
          </span> */}
        </div>
        <div>
          <span onClick={githubHandler} className="">
            <FontAwesomeIcon icon={faResearchgate} />
          </span>
          <span onClick={externalLinkHandler} className="">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </span>
          <span onClick={closeHandler} className="">
            <FontAwesomeIcon icon={faWindowClose} />
          </span>
        </div>
      </div>
      <div className="iframe-container" style={{ zIndex: 110 }}>
        {/* <iframe ref={iframeRef} /> */}
        <div className="live-iframe flex flex-col justify-start items-center overflow-y-scroll " ref={iframeRef}>
          <h1 className="">{activeData?.name}</h1>
          <div className="">
            {activeData?.fullText}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LiveProject;
