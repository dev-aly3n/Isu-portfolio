import Head from "next/head";
import { Fragment } from "react";
import GatePage from "../src/components/gatePage/GatePage";
import { indexMeta } from "../src/store/allData";

export default function gate(): JSX.Element {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {indexMeta.preload.map((src) => (
          <link rel="preload" as="image" href={src} />
        ))}
        <title>{indexMeta.title}</title>
        <meta name="description" content={indexMeta.description} />
        <meta name="keywords" content={indexMeta.keywords} />
        <meta name="author" content={indexMeta.author} />
      </Head>
      <div className="overflow-hidden w-screen h-screen fixed top-0 left-0 z-10">
        <GatePage />
      </div>
    </Fragment>
  );
}
