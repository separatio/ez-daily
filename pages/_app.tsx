import '../style/index.css'
import { Provider } from "next-auth/client";
import { AppProps } from "next/app";

const DailyFacilitator = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default DailyFacilitator;
