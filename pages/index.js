import Head from "next/head";
import { useMoralis } from "react-moralis";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  const { logout } = useMoralis();

  return (
    <div>
      <Head>
        <title>Moralis Hack Project</title>
      </Head>

      <Navbar />

      <Footer />
    </div>
  );
};

export default Home;
