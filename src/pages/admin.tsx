import Head from "next/head";
import { Fragment } from "react";
import Admin from "../components/adminPage/Admin";

export default function admin():JSX.Element {
  return (
    <Fragment>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Admin - dev Aly3n - JS developer</title>
      </Head>
      <div className="z-0">
      <Admin />
      </div>
    </Fragment>
  );
}
