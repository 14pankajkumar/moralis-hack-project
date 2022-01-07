import Head from "next/head";
import { MoralisProvider, useMoralis } from "react-moralis";
import Login from "../components/Login";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <MoralisProvider
        appId={process.env.NEXT_PUBLIC_APP_ID}
        serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
      >
        <Auth>
          <Component {...pageProps} />
        </Auth>
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
