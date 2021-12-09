import type { AppProps } from "next/app";
import { Fragment, useContext } from "react";
// libs
import { config as fontawesomeConfig } from "@fortawesome/fontawesome-svg-core";
// components
import Main from "../src/components/layout/Main"
import Header from "../src/components/layout/Header";
import Footer from "../src/components/layout/Footer";
import SVGPatternsFilters from "../src/components/SVGPatternsFilters";
// hooks
// store
// utils & animation
import "../styles/tailwind.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { PrevUrlCtx, PrevUrlCtxProvider } from "../src/store/context/prevUrlCts";


fontawesomeConfig.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  const prevUrlctx = useContext(PrevUrlCtx);

  return (
    <Fragment>
      <Header />
      <Main>
        <PrevUrlCtxProvider>
      <Component {...pageProps} />
      </PrevUrlCtxProvider>
      </Main>
      <Footer />
      <SVGPatternsFilters />
    </Fragment>
  );
}

export default MyApp;
