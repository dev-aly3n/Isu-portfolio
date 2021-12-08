import { RefObject, Fragment, useCallback,useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faTabletAlt,
  faDesktop,
  faExternalLinkAlt,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
interface props {
  settingID: (id: null | string) => void;
  iframeRef: RefObject<HTMLIFrameElement>;
  projectsRef: RefObject<HTMLDivElement>;
}
const LiveProject: React.FC<props> = ({
  iframeRef,
  settingID,
  projectsRef,
}) => {

  const [selected, setSelected] = useState<number|null>(null);

  const closeHandler = () => {
    projectsRef.current!.style.height = "100%";
    document.body.style.overflow = "auto";
    settingID(null);
    window.history.pushState({}, "", "/projects");
  };

  const externalLinkHandler = () => {
    window.open(iframeRef.current?.src);
  };

  const resizeHandler = useCallback((size: number) => {
    const viewPortWidth: number = window.outerWidth;
    const viewPortHeight: number = window.outerHeight;
    if (size <= viewPortWidth) {
      iframeRef.current!.style.width = `${size}px`;
      iframeRef.current!.style.transform = `scale(1)`;
      iframeRef.current!.style.height = `100%`;
    } else {
      const scaleRate: number = viewPortWidth / size;
      iframeRef.current!.style.width = `${size}px`;
      iframeRef.current!.style.height = `${viewPortHeight / scaleRate - 150}px`;
      iframeRef.current!.style.transform = `scale(${scaleRate})`;
    }
    iframeRef.current!.setAttribute("sizeID",`${size}`);
    setSelected(size);
  }, []);
  return (
    <Fragment>
      <div className="header">
        <div >
          <span
            onClick={() => resizeHandler(320)}
            className={`${selected===320?"active":""}`}
          >
            <FontAwesomeIcon icon={faMobileAlt} />
          </span>
          <span
            onClick={() => resizeHandler(768)}
            className={`${selected===768?"active":""}`}
          >
            <FontAwesomeIcon icon={faTabletAlt} />
          </span>
          <span
            onClick={() => resizeHandler(1280)}
            className={`${selected===1280?"active":""}`}
          >
            <FontAwesomeIcon icon={faDesktop} />
          </span>
        </div>
        <div className="">
          <span
            onClick={externalLinkHandler}
            className=""
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </span>
          <span
            onClick={closeHandler}
            className=""
          >
            <FontAwesomeIcon icon={faWindowClose} />
          </span>
        </div>
      </div>
      <div
        className="w-full h-full bg-primary-900 iframe-loader"
        style={{ zIndex: 110 }}
      >
        <iframe
          ref={iframeRef}
          className="w-full h-full duration-1000 mx-auto border-8 border-primary-800 rounded-2xl"
          style={{ transformOrigin: "left top" }}
        />
      </div>
    </Fragment>
  );
};

export default LiveProject;
