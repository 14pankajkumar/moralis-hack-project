import { useEffect } from "react";
import { MoralisProvider, useMoralis } from "react-moralis";
import Login from "../components/Login";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_APP_ID}
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
    >
      <Auth>
        <Component {...pageProps} />
      </Auth>
    </MoralisProvider>
  );
};

export default MyApp;

const Auth = ({ children }) => {
  const { authenticate, isAuthenticated, isAuthenticating } = useMoralis();
  if (isAuthenticated) return children;
  return <Login login={authenticate} loading={isAuthenticating} />;
};
