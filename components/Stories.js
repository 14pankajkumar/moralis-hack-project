import React from "react";
import { avatar } from "../utils/fakedata";
import Story from "./Story";

const Stories = () => {
  return (
    <div className="flex space-x-2 p-6 my-8 white-glassmorphism mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {avatar.map((profile) => {
        return (
          <Story
            key={profile.id}
            img={profile.image}
            username={profile.username}
          />
        );
      })}
    </div>
  );
};

export default Stories;
