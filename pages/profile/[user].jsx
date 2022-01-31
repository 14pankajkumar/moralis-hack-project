import Head from "next/head";
import { useMoralis } from "react-moralis";
import {
  Navbar,
  Footer,
  UserFeed,
  PostModal,
  ChangeUsername,
} from "../../components";

const userProfile = ({ address }) => {
  const { user } = useMoralis();
  return (
    <div className="overflow-y-scroll h-screen text-white">
      <Head>
        <title>hamara.io - {address}</title>
      </Head>

      <div className="gradient-bg-home">
        <Navbar />

        {address === user.get("ethAddress") ? (
          <>
            <UserFeed address={address} />

            <PostModal />
            <ChangeUsername />
          </>
        ) : (
          <div className="flex justify-center items-center h-screen">
            <h1 className="text-white text-xl">Not Found</h1>
          </div>
        )}

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
