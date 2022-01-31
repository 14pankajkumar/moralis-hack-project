import Head from "next/head";
import { MoralisProvider, useMoralis } from "react-moralis";
import { RecoilRoot } from "recoil";
import { Login } from "../components";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <title>hamara.io</title>
      </Head>
      <MoralisProvider
        appId={process.env.NEXT_PUBLIC_APP_ID}
        serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
      >
        <RecoilRoot>
          <Auth>
            <Component {...pageProps} />
          </Auth>
        </RecoilRoot>
      </MoralisProvider>
    </div>
  );
};

export default MyApp;

const Auth = ({ children }) => {
  const { authenticate, isAuthenticated, isAuthenticating } = useMoralis();
  if (isAuthenticated) return children;
  return <Login login={authenticate} loading={isAuthenticating} />;
};
