import { useMoralis } from "react-moralis";

const Profile = ({ username }) => {
  const { user } = useMoralis();
  return (
    <div className="grid md:flex justify-between items-center space-x-2 p-6 my-8 white-glassmorphism mt-8 border-gray-200 border rounded-sm">
      <div className="grid md:flex items-center">
        <div>
          <img
            className="w-28 h-28 rounded-full p-[2px] border-red-500 border-2 object-contain cursor-pointer"
            src={`https://avatars.dicebear.com/api/pixel-art/${
              username || user?.getUsername()
            }.svg`}
            alt=""
          />
        </div>

        <div className="pl-10">
          <h2 className="font-bold">Pankaj Kumar</h2>
          <h3 className="text-sm text-gray-400">{username}</h3>
        </div>
      </div>

      <div>
        <button className="bg-[#2952e3] p-3 rounded-lg font-semibold cursor-pointer hover:bg-[#2546b]">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
