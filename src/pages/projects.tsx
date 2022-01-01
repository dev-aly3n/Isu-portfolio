import Head from "next/head";
import { Fragment } from "react";
import Projects from "../components/projectsPage/Projects";
import { projectMeta } from "../store/allData";

export default function career(): JSX.Element {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {projectMeta.preload.map((src) => (
          <link key={src} rel="preload" as="image" href={src} />
        ))}
        <title>{projectMeta.title}</title>
        <meta name="description" content={projectMeta.description} />
        <meta name="keywords" content={projectMeta.keywords} />
        <meta name="author" content={projectMeta.author} />
      </Head>
      <div className="z-0">
        <Projects />
      </div>
    </Fragment>
  );
}
