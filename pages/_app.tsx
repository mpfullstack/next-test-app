import '../styles/globals.css'
import App, { AppContext } from 'next/app';
import type { AppProps } from 'next/app'
import { wrapper } from '../src/store';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  console.log("appProps", appProps);

  return { ...appProps }
}

export default wrapper.withRedux(MyApp);
