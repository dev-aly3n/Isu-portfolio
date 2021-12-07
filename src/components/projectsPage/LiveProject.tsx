import { RefObject, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faTablet,
  faLaptop,
  faExternalLinkAlt,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
interface props {
  settingID: (id: null | string) => void;
  iframeRef: RefObject<HTMLIFrameElement>;
}
const LiveProject: React.FC<props> = ({ iframeRef, settingID }) => {
  const closeHandler = () => {
    document.body.style.overflow = "auto";
    settingID(null);
    window.history.pushState({}, "", "/projects");
  };

  const externalLinkHandler = () => {
    window.open(iframeRef.current?.src)
  }
  
  const resizeHandler = (size:string) => {
    iframeRef.current!.style.width = size;
    // iframeRef.current!.style.transform = "scale(0.5)";
  }

  return (
    <Fragment>
      <div className="h-16 w-full bg-green-900 flex justify-around items-center">
        <div className="flex justify-center gap-x-3 w-1/2 text-3xl">
          <span onClick={()=>resizeHandler("320px")} className="w-16 text-center py-1 rounded-md bg-yellow-300/50 duration-300 cursor-pointer hover:scale-105">
            <FontAwesomeIcon icon={faMobile} />
          </span>
          <span onClick={()=>resizeHandler("768px")} className="w-16 text-center py-1 rounded-md bg-yellow-300/50 duration-300 cursor-pointer hover:scale-105">
            <FontAwesomeIcon icon={faTablet} />
          </span>
          <span onClick={()=>resizeHandler("1440px")} className="w-16 text-center py-1 rounded-md bg-yellow-300/50 duration-300 cursor-pointer hover:scale-105">
            <FontAwesomeIcon icon={faLaptop} />
          </span>
        </div>
        <div className="flex justify-center gap-x-3 w-[10%] text-3xl">
          <span onClick={externalLinkHandler} className="w-16 text-center py-1 rounded-md bg-yellow-300/50 duration-300 cursor-pointer hover:scale-105">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </span>
          <span onClick={closeHandler} className="w-16 text-center py-1 rounded-md bg-yellow-300/50 duration-300 cursor-pointer hover:scale-105">
            <FontAwesomeIcon icon={faWindowClose} />
          </span>
        </div>
      </div>
      <div
        className="w-full h-full bg-gray-900 iframe-loader "
        style={{ zIndex: 110 }}
      >
        <iframe ref={iframeRef} className="w-full h-full mx-auto duration-1000" />
      </div>
    </Fragment>
  );
};

export default LiveProject;
