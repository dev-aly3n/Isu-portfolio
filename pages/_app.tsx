import type { AppProps } from "next/app";
import { Fragment } from "react";
// libs
import { useState,useEffect } from "react";
import { useRouter } from "next/router";
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


fontawesomeConfig.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    router.events.on("beforeHistoryChange", function(e){
      console.log(e)
    })
  }, [])
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
