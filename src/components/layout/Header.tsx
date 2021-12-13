import Link from "next/link";
import { useRouter } from "next/router";
import React, { MouseEventHandler, useContext, useLayoutEffect, useState } from "react";
import { GlobalCtx } from "../../store/context/globalCtx";
import {motion } from 'framer-motion';
import { enterToHeader } from "../../utils/animation";

interface Links {
  ref: string;
  text: string;
  handler?: MouseEventHandler<HTMLLIElement> | undefined;
}

const Header: React.FC = () => {
  const globCtx = useContext(GlobalCtx);
  const router = useRouter();

  const toCareerFunc = () => {
    globCtx.toCareerHandler(0);
  };
  const headerLinks: Links[] = [
    {
      ref: "/career",
      text: "Career",
      handler: toCareerFunc,
    },
    {
      ref: "/projects",
      text: "Projects",
    },
  ];

  const toTheGateHandler = () => {
    globCtx.toGateHandler(1);
  };
  const [varMotion, setVarMotion] = useState( {
    hidden:"",
    visible:"",
    variant:{}
  });
  useLayoutEffect(() => {
    if(globCtx.toCareer === 1){
      setVarMotion( {
        hidden:"hidden",
        visible:"visible",
        variant:enterToHeader
      })
    }
  }, [globCtx.toCareer])

  return router.pathname !== "/" ? (
    <motion.div className="header-container"
    initial={varMotion.hidden}
    animate={varMotion.visible}
    variants={varMotion.variant}
    >
      <h1>
        <Link href="/career">Aly3n</Link>
      </h1>
      <ul>
        {headerLinks.map((headLink) => {
          return (
            <li key={headLink.text} onClick={headLink.handler}>
              <Link href={headLink.ref}>
                <a
                  className={`${
                    router.pathname === headLink.ref
                      ? "bg-gray-100 text-gray-900"
                      : "text-white"
                  }`}
                >
                  {headLink.text}
                </a>
              </Link>
            </li>
          );
        })}
        <li className="text-white" onClick={toTheGateHandler}>
          <a onClick={(e) => e.preventDefault()}>ToTheGate</a>
        </li>
      </ul>
    </motion.div>
  ) : (
    <React.Fragment></React.Fragment>
  );
};

export default Header;
