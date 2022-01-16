import { avatar } from "../utils/fakedata";
import FollowBtn from "./FollowBtn";

const Suggestions = () => {
  return (
    <div className="h-56 mt-4 ml-10 white-glassmorphism p-7 overflow-y-scroll">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-500 font-semibold">See All</button>
      </div>

      {avatar.slice(0, 5).map((profile) => {
        return (
          <div
            key={profile.id}
            className="flex items-center justify-between mt-3"
          >
            <img
              className="w-10 h-10 rounded-full border p-[2px]"
              src={profile.image}
              alt=""
            />

            <div className="flex-1 ml-4">
              <h2 className="font-semibold text-sm">{profile.username}</h2>
              <h3 className="text-sm text-gray-400">
                {/* Work at {profile.company.name || profile.company} */}
              </h3>
            </div>
            <FollowBtn />
          </div>
        );
      })}
    </div>
  );
};

export default Suggestions;
