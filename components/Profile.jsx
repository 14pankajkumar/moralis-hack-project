import { useMoralis } from "react-moralis";
import { useRecoilState } from "recoil";
import { editModal } from "../atoms/PostModalAtom";

const Profile = ({ address }) => {
  const { user } = useMoralis();
  const [open, setOpen] = useRecoilState(editModal);

  return (
    <div className="grid md:flex justify-between items-center space-x-2 p-6 my-8 white-glassmorphism mt-8 border-gray-200 border rounded-sm">
      <div className="grid md:flex items-center">
        <div>
          <img
            className="w-28 h-28 rounded-full p-[2px] border-red-500 border-2 bg-white object-contain cursor-pointer"
            src={`https://avatars.dicebear.com/api/pixel-art/${user?.getUsername()}.svg`}
            alt=""
          />
        </div>

        <div className="pl-10">
          <h3 className="text-lg text-white">{user?.getUsername()}</h3>
          <h3
            className="text-sm text-gray-400 cursor-pointer"
            onClick={() => navigator.clipboard.writeText(address)}
          >
            {address}
          </h3>
        </div>
      </div>

      <div>
        <button
          onClick={() => setOpen(true)}
          className="bg-[#2952e3] p-3 rounded-lg font-semibold cursor-pointer hover:bg-[#2546b]"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
