import Head from "next/head";
import { Navbar, Footer } from "../components";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Moralis Hack Project</title>
      </Head>

      <div className="gradient-bg-home">
        <Navbar />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
