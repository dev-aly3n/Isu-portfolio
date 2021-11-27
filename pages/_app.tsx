import type { AppProps } from "next/app";
import { Fragment } from "react";
import { AnimatePresence } from "framer-motion";

import Main from "../src/components/layout/Main"
import Header from "../src/components/layout/Header";
import Footer from "../src/components/layout/Footer";
import "../styles/tailwind.css";
import { config as fontawesomeConfig } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import SVGPatternsFilters from "../src/components/SVGPatternsFilters";

fontawesomeConfig.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Header />
      <Main>
      <Component {...pageProps} />
      </Main>
      <Footer />
      <SVGPatternsFilters />
    </Fragment>
  );
}

export default MyApp;
