import Head from "next/head";
import { Navbar, Footer, UserFeed, PostModal } from "../../components";

const userProfile = ({ username }) => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Moralis Hack Project</title>
      </Head>

      <div className="gradient-bg-home">
        <Navbar />

        <UserFeed username={username} />

        <PostModal />

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
