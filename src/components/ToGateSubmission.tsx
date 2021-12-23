import { useRouter } from "next/router";
import { Fragment, useContext } from "react";
import { GlobalCtx } from "../store/context/globalCtx";
const ToGateSubmission: React.FC = () => {
  const globCtx = useContext(GlobalCtx);
  const router = useRouter();

  const noBtnHandler = () => {
    globCtx.toGateHandler(0);
  };
  const yesBtnHandler = () => {
    globCtx.toGateHandler(0);
    setTimeout(() => {
      router.push("/gate");
    }, 100);
  };

  return globCtx.toGate === 1 ? (
    <div className="w-screen h-screen fixed top-0 left-0 bg-black/90 z-100 flex justify-center items-center">
      <div
        className="bg-gray-300 w-11/12 sm:w-8/12 lg:w-1/2 min-h-[50vh] rounded-2xl
 flex flex-col justify-center items-center text-xl font-medium px-4 py-5 sm:px-10"
      >
        <h2 className="text-red-600 font-bold text-3xl">Are you Sure?</h2>
        <p className="text-xl">
          The Gate is really heavy and need a gaming system to run properly.
          <br />
          Do you still want to go to gate?
        </p>
        <div className="flex flex-wrap text-base gap-x-2 my-2">
          <span className="text-green-500 text-xl">minimum requirement:</span>
          <span>Core i7 +9000series</span>
          <span>GTX 1050</span>
        </div>
        <p>We still working on it to improve the performance.</p>
        <p>If you met the requirement select YES.</p>
        <div className="flex items-center justify-center gap-x-10 mt-10 ">
          <button
            onClick={noBtnHandler}
            className="px-10 py-3 rounded-xl bg-red-300 shadow-xl duration-500
       hover:bg-red-500 hover:text-white hover:scale-110 hover:ring-4 "
          >
            No
          </button>
          <button
            onClick={yesBtnHandler}
            className="px-10 py-3 rounded-xl bg-green-300 shadow-xl duration-500
       hover:bg-green-500 hover:text-white hover:scale-110 hover:ring-4"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  ) : (
    <Fragment></Fragment>
  );
};

export default ToGateSubmission;
