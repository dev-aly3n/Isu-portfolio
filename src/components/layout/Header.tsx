import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface Links {
  ref: string;
  text: string;
}
const headerLinks: Links[] = [
  {
    ref: "/career",
    text: "Career",
  },
  {
    ref: "/projects",
    text: "Projects",
  },
  {
    ref: "/",
    text: "ToTheGate",
  },

];

const Header: React.FC = () => {
  const router = useRouter();
  return (
     router.pathname !== "/" ? (
    <div className="header-container">
      <h1>
        <Link href="/">Aly3n</Link>
      </h1>
      <ul>
        {headerLinks.map((headLink) => {
          return (
            <li key={headLink.text}>
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
      </ul>
    </div>):
    <React.Fragment>
    </React.Fragment>
      
  );
};

export default Header;
