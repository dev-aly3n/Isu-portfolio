// libs
import { useState, useContext, useEffect, useRef } from "react";
import { IsuGateCtx } from "../../store/context/isuGateCtx";
// components
// hooks
// store
// utils & animation



const Audio: React.FC = () => {
    const [once, setOnce] = useState(false);
    const [once1, setOnce1] = useState(false);
const key1AudioRef = useRef<any>(null);
const key2AudioRef = useRef<any>(null);

const gateCtx = useContext(IsuGateCtx);

useEffect(() => {
    if(once){
        key2AudioRef.current.currentTime = 0;
    key1AudioRef.current.volume = 0.2;
    key1AudioRef.current?.play();
    }
    if(once===false){
        setOnce(true)
    }
}, [gateCtx.isHovered])

useEffect(() => {
    if(once){
        key2AudioRef.current.currentTime = 0;
        key2AudioRef.current?.play();
        }
        if(once===false){
            setOnce(true)
        }
}, [gateCtx.impact])
  return (
    <>
      <audio ref={key1AudioRef} src="/audio/key1.mp3" />
      <audio ref={key2AudioRef} src="/audio/key2.mp3" />
      {/* <audio src="/audio/key1.mp3" />
      <audio src="/audio/key1.mp3" />
      <audio src="/audio/key1.mp3" /> */}
    </>
  );
};

export default Audio;
