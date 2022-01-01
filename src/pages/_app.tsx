import type { AppProps } from "next/app";
import { Fragment } from "react";
// libs
import { config as fontawesomeConfig } from "@fortawesome/fontawesome-svg-core";
// components
import Main from "../components/layout/Main"
import Header from "../components/layout/Header";
import SVGPatternsFilters from "../components/SVGPatternsFilters";
// hooks
// store
// utils & animation
import "../../styles/tailwind.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { GlobalCtxProvider } from "../store/context/globalCtx";


fontawesomeConfig.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Fragment>
      <GlobalCtxProvider>
      <Header />
      <Main>
      <Component {...pageProps} />
      </Main>
      {/* <Footer /> */}
      </GlobalCtxProvider>
      <SVGPatternsFilters />
    </Fragment>
  );
}

export default MyApp;
