import Head from "next/head";
import {
  Navbar,
  Footer,
  UserFeed,
  PostModal,
  ChangeUsername,
} from "../../components";

const userProfile = ({ address }) => {
  return (
    <div className="overflow-y-scroll h-screen text-white">
      <Head>
        <title>hamara.io - {address}</title>
      </Head>

      <div className="gradient-bg-home">
        <Navbar />

        <UserFeed address={address} />

        <PostModal />
        <ChangeUsername />

        <Footer />
      </div>
    </div>
  );
};

export default userProfile;

export async function getServerSideProps(context) {
  const address = context.query.user;
  return {
    props: {
      address,
    },
  };
}
