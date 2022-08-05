import React from "react";
import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    console.log("i am triggered");
  }, []);
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
