import Head from "next/head";
import { Fragment } from "react";
import Career from "../src/components/careerPage/Career";
import { careerMeta } from "../src/store/allData";

export default function career(): JSX.Element {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {careerMeta.preload.map((src) => (
          <link key={src} rel="preload" as="image" href={src} />
        ))}
        <title>{careerMeta.title}</title>
        <meta name="description" content={careerMeta.description} />
        <meta name="keywords" content={careerMeta.keywords} />
        <meta name="author" content={careerMeta.author} />
      </Head>
      <div className="z-0">
        <Career />
      </div>
    </Fragment>
  );
}
