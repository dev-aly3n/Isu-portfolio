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
import { GlobalCtxProvider } from "../src/store/context/globalCtx";


fontawesomeConfig.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Fragment>
      <GlobalCtxProvider>
      <Header />
      <Main>
      <Component {...pageProps} />
      </Main>
      <Footer />
      </GlobalCtxProvider>
      <SVGPatternsFilters />
    </Fragment>
  );
}

export default MyApp;
