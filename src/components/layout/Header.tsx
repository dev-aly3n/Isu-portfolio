import Link from "next/link";
import { useRouter } from "next/router";
import React, { MouseEventHandler, useContext } from "react";
import { GlobalCtx } from "../../store/context/globalCtx";

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

  return router.pathname !== "/" ? (
    <div className="header-container">
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
    </div>
  ) : (
    <React.Fragment></React.Fragment>
  );
};

export default Header;
