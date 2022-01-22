import { useMoralis } from "react-moralis";

const MiniProfile = () => {
  const { user, logout } = useMoralis();
  return (
    <div className="flex items-center justify-between mt-8 my-8 ml-10 p-7 white-glassmorphism">
      <img
        className="w-16 h-16 rounded-full border p-[2px]"
        src={`https://avatars.dicebear.com/api/pixel-art/${user?.getUsername()}.svg`}
        alt=""
      />

      <div className="flex-1 mx-4">
        <h2 className="font-bold">{user?.get("ethAddress").slice(0,5)}...{user?.get("ethAddress").slice(-4)}</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button onClick={logout} className="text-blue-400 text-sm font-semibold">
        Sign Out
      </button>
    </div>
  );
};

export default MiniProfile;
