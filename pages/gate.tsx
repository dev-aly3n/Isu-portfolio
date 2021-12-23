import Head from "next/head";
import { Fragment } from "react";
import GatePage from "../src/components/gatePage/GatePage";
import { gateMeta } from "../src/store/allData";

export default function gate(): JSX.Element {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {gateMeta.preload.map((src) => (
          <link key={src} rel="preload" as="image" href={src} />
        ))}
        <title>{gateMeta.title}</title>
        <meta name="description" content={gateMeta.description} />
        <meta name="keywords" content={gateMeta.keywords} />
        <meta name="author" content={gateMeta.author} />
      </Head>
      <div className="overflow-hidden w-screen h-screen fixed top-0 left-0 z-10">
        <GatePage />
      </div>
    </Fragment>
  );
}
