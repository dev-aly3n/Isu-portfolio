import { Fragment } from "react";
import Main from "../components/layout/Main";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "../styles/tailwind.css";
import { config as fontawesomeConfig } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

fontawesomeConfig.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </Fragment>
  );
}

export default MyApp;
