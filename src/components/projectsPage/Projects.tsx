import { useRef } from "react";
import Proj from "./Proj";

const Projects:React.FC = () => {
   const iframeRef = useRef<HTMLIFrameElement>(null);

    return(
        <div className="flex flex-col justify-between items-center h-full w-full pb-96">
            <div className="h-16 w-full bg-green-900">
            <iframe ref={iframeRef} src="" className="h-0" />
            </div>
            <div className="w-full h-full flex flex-wrap gap-5 justify-center items-center mt-3">
            <Proj iframeRef={iframeRef} />
            <Proj iframeRef={iframeRef}/>
            <Proj iframeRef={iframeRef}/>
            <Proj iframeRef={iframeRef}/>
            </div>
        </div>
    )
}

export default Projects;