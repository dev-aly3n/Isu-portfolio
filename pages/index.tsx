import Head from "next/head";
import { Fragment } from "react";
import GatePage from "../src/components/gatePage/GatePage";

export default function gate(): JSX.Element {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>dev Aly3n - JS developer</title>
        <meta
          name="description"
          content="dev Aly3n is a javascript developer especially at front-end who is also an aerospace engineer and editor-in-chief at aspad scientific magazine."
        />
        <meta
          name="keywords"
          content="dev aly3n, aly3n, aly3n developer, aly3n javascript, aly3n front-end, javascript, front-end, web development, software engineer, ali mohamadi, علی محمدی, علی محمدی برنامه نویس فرانت اند"
        />
        <meta name="author" content="dev aly3n" />
      </Head>
      <div className="overflow-hidden w-screen h-screen fixed top-0 left-0 z-10">
      <GatePage />
      </div>
    </Fragment>
  );
}
