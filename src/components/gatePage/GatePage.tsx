import { IsuGateCtxProvider } from "../../store/context/isuGateCtx";

const GatePage: React.FC = (props) => {
  return <IsuGateCtxProvider>{props.children}</IsuGateCtxProvider>;
};

export default GatePage;
