// libs
import { useState, useContext, useEffect, useRef } from "react";
import { IsuGateCtx } from "../../store/context/isuGateCtx";
// components
// hooks
// store
// utils & animation

const Audio: React.FC = () => {
  const [once, setOnce] = useState(false);

  const key1AudioRef = useRef<any>(null);
  const key2AudioRef = useRef<any>(null);
  const lineFillRef = useRef<any>(null);
  const openGateRef = useRef<any>(null);

  const gateCtx = useContext(IsuGateCtx);

  useEffect(() => {
    if (once) {
      key1AudioRef.current.currentTime = 0;
      key1AudioRef.current.volume = 0.2;
      key1AudioRef.current?.play();
    }
    if (once === false) {
      setOnce(true);
    }
  }, [gateCtx.isHovered]);

  useEffect(() => {
    key1AudioRef.current.pause();
    if (once) {
      key2AudioRef.current.currentTime = 0.2;
      key2AudioRef.current.volume = 0.03;
      key2AudioRef.current?.play();
    }
    if (once === false) {
      setOnce(true);
    }
  }, [gateCtx.impact]);
  useEffect(() => {
    if (once) {
      lineFillRef.current.currentTime = 0;
      lineFillRef.current?.play();
      // @ts-ignore
      const titop = document?.querySelector("#titop") as HTMLElement;
      titop!.style.animation = "shake 0.2s infinite";
      setTimeout(() => {
        titop!.style.animation = "";
      }, 7000);
    }
    if (once === false) {
      setOnce(true);
    }
  }, [gateCtx.keyAnimationFinished]);
  useEffect(() => {
    if (once) {
      openGateRef.current.currentTime = 0;
      openGateRef.current.volume = 0.3;
      openGateRef.current?.play();
      setTimeout(() => {
        openGateRef.current.volume = 0;
      }, 2000);
    }
    if (once === false) {
      setOnce(true);
    }
  }, [gateCtx.doorAnimationFinished]);
  return (
    <div className="hidden">
      <audio ref={key1AudioRef} src="/audio/key1.mp3" />
      <audio ref={key2AudioRef} src="/audio/key2.mp3" />
      <audio ref={lineFillRef} src="/audio/lineFill.mp3" />
      <audio ref={openGateRef} src="/audio/openGate.mp3" />
      {/* <audio src="/audio/key1.mp3" /> */}
    </div>
  );
};

export default Audio;
