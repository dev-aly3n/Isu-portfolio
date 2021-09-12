import Link from "next/link";
import { useRouter } from "next/router";

const headerLinks = [
  {
    ref: "/",
    text: "Career",
  },
  {
    ref: "/sport",
    text: "Sport",
  },
  {
    ref: "/art",
    text: "Art",
  },
  {
    ref: "/biography",
    text: "Biography",
  },
];

const Header = () => {
  const router = useRouter();
  return (
    <div className="header-container">
      <h1>
        <Link href="/">Atefeh Hasani</Link>
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
    </div>
  );
};

export default Header;
