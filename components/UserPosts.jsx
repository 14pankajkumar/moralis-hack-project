import { UserPost } from "./index";
import { useMoralis, useMoralisQuery } from "react-moralis";

const UserPosts = () => {
  const { user } = useMoralis();
  const { data } = useMoralisQuery(
    "Posts",
    (query) =>
      query
        .descending("createdAt")
        .equalTo("ethAddress", user.get("ethAddress")),
    [],
    {
      live: true,
    }
  );

  return (
    <div className="my-8 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center md:p-6 xl:p-6">
      {data.map((post) => {
        return (
          <UserPost
            key={post.id}
            id={post.id}
            username={post.attributes.username}
            image={post.attributes.ipfsUrl}
            caption={post.attributes.caption}
          />
        );
      })}
    </div>
  );
};

export default UserPosts;
