import '../style/index.css';
import {Provider} from 'next-auth/client';

const DailyFacilitator = ({Component, pageProps}) => {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default DailyFacilitator;
