import { RefObject, Fragment, useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faTabletAlt,
  faDesktop,
  faExternalLinkAlt,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
interface props {
  urlID: { ID: string | null; gitHub: string | null };
  settingID: (id: null | string, git: string | null) => void;
  iframeRef: RefObject<HTMLIFrameElement>;
  projectsRef: RefObject<HTMLDivElement>;
}
const LiveProject: React.FC<props> = ({
  iframeRef,
  urlID,
  settingID,
  projectsRef,
}) => {
  const [selected, setSelected] = useState<number | null>(null);

  const closeHandler = () => {
    settingID(null, null);
    window.history.pushState({}, "", "/projects");
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
      iframeRef.current!.style.height = `85%`;
    } else {
      const scaleRate: number = viewPortWidth / size;
      iframeRef.current!.style.width = `${size}px`;
      iframeRef.current!.style.height = `${
        (viewPortHeight - 128) / scaleRate
      }px`;
      iframeRef.current!.style.transform = `scale(${scaleRate})`;
    }
    iframeRef.current!.setAttribute("sizeID", `${size}`);
    setSelected(size);
  }, []);
  // 320 + 30 = 350 . 30 px is the scrollbar width
  return (
    <Fragment>
      <div className="header">
        <div>
          <span
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
          </span>
        </div>
        <div>
          <span onClick={githubHandler} className="">
            <FontAwesomeIcon icon={faGithubAlt} />
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
        <iframe ref={iframeRef} />
      </div>
    </Fragment>
  );
};

export default LiveProject;
