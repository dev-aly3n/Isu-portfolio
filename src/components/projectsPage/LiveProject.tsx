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
  projectsRef:RefObject<HTMLDivElement>;
}
const LiveProject: React.FC<props> = ({ iframeRef, settingID, projectsRef }) => {
  const closeHandler = () => {
    projectsRef.current!.style.height = "100%";
    document.body.style.overflow = "auto";
    settingID(null);
    window.history.pushState({}, "", "/projects");
  };

  const externalLinkHandler = () => {
    window.open(iframeRef.current?.src)
  }
  
  const resizeHandler = (size:number) => {
    const viewPortWidth:number = window.outerWidth;
    const viewPortHeight:number = window.outerHeight;
    if(size<=viewPortWidth){
    iframeRef.current!.style.width = `${size}px`;
    iframeRef.current!.style.transform = `scale(1)`;
    iframeRef.current!.style.height = `${viewPortHeight}px`;
  } else {
    const scaleRate:number = viewPortWidth/size;
    iframeRef.current!.style.width = `${size}px`;
    iframeRef.current!.style.height = `${viewPortHeight/scaleRate}px`;
    iframeRef.current!.style.transform = `scale(${scaleRate})`;
    }
  }

  return (
    <Fragment>
      <div className="h-16 w-full bg-green-900 flex justify-around items-center">
        <div className="flex justify-center gap-x-3 w-1/2 text-3xl">
          <span onClick={()=>resizeHandler(320)} className="w-16 text-center py-1 rounded-md bg-yellow-300/50 duration-300 cursor-pointer hover:scale-105">
            <FontAwesomeIcon icon={faMobile} />
          </span>
          <span onClick={()=>resizeHandler(768)} className="w-16 text-center py-1 rounded-md bg-yellow-300/50 duration-300 cursor-pointer hover:scale-105">
            <FontAwesomeIcon icon={faTablet} />
          </span>
          <span onClick={()=>resizeHandler(1280)} className="w-16 text-center py-1 rounded-md bg-yellow-300/50 duration-300 cursor-pointer hover:scale-105">
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
        className="w-full h-full bg-gray-900 iframe-loader"
        style={{ zIndex: 110 }}
      >
        <iframe ref={iframeRef} className="w-full h-full duration-1000 mx-auto border-8 border-primary-800 rounded-2xl"
        style={{transformOrigin:"left top"}}  />
      </div>
    </Fragment>
  );
};

export default LiveProject;
