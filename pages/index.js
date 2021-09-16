import Head from "next/head";
import { Fragment } from "react";
import Home from '../components/homePage/Home';

export default function home() {
  return (
    <Fragment>
      <Head>
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
      <Home />
    </Fragment>
  );
}
