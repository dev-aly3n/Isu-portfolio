import React from "react";
import { useRouter } from "next/router";

const Footer: React.FC = () => {
  const router = useRouter();

  return router.pathname !== "/" ? (
    <div className="flex flex-col justify-center items-center bg-secondary-800/60 pt-14 pb-1 mt-[100%] ">
      <div className="w-[92vw] bg-gray-300 h-px" />
      <div className="text-gray-400 text-center text-xs">
        dev-Aly3n © 2020 - 2021 All Rights Reserved.
      </div>
    </div>
  ) : (
    <React.Fragment></React.Fragment>
  );
};

export default Footer;
