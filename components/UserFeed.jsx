import { Profile, UserPosts } from "./index";

const UserFeed = ({ username }) => {
  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
        <section className="col-span-2">
          <Profile username={username} />
        </section>
      </div>
      <div>
        {/* user posts */}
        <UserPosts />
      </div>
    </main>
  );
};

export default UserFeed;
