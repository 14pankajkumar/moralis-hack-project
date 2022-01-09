import { useMoralis } from "react-moralis";

const UserFeed = ({ username }) => {
  const { user } = useMoralis();
  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-white text-3xl font-bold">
        This is user's Profile page <br /> username - {username} <br /> Address - {user.get("ethAddress")}
      </h1>
    </div>
  );
};

export default UserFeed;
