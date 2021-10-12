import { IsuGateCtxProvider } from "../../store/context/isuGateCtx";
import Gate from "./Gate";

const GatePage: React.FC = () => {
  return (
    <IsuGateCtxProvider>
      <Gate />
    </IsuGateCtxProvider>
  );
};

export default GatePage;
