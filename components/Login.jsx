import { useMoralis } from "react-moralis";
import {
  Navbar,
  LoginSection,
  Footer,
  Services,
  Loading,
  PoweredBy,
  NoticeModal,
} from ".";

const Login = () => {
  const { isAuthenticating } = useMoralis();

  if (isAuthenticating) return <Loading />;

  return (
    <div className="min-h-screen gradient-bg-home">
      <Navbar />
      <LoginSection />
      <Services />
      {/* <NoticeModal /> */}
      <PoweredBy />
      <Footer />
    </div>
  );
};

export default Login;
