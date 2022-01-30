import Head from "next/head";
import { Navbar, Footer, HomeFeed, PostModal } from "../components";

const Home = () => {
  
  return (
    <div className="overflow-y-scroll h-screen text-white">
      <Head>
        <title>Moralis Hack Project</title>
      </Head>

      <div className="gradient-bg-home">
        <Navbar />

        <HomeFeed />

        <PostModal />

        <Footer />
      </div>
    </div>
  );
};

export default Home;
