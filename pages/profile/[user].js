import Head from "next/head";
import { Navbar, Footer } from "../../components";

const userProfile = ({ username }) => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Moralis Hack Project</title>
      </Head>

      <div className="gradient-bg-home">
        <Navbar />
        <h1 className="text-white">{username}</h1>
        <Footer />
      </div>
    </div>
  );
};

export default userProfile;

export async function getServerSideProps(context) {
  const username = context.query.user;
  return {
    props: {
      username,
    },
  };
}
