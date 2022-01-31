import { Post } from "./index";
import { useMoralisQuery } from "react-moralis";

const Posts = () => {
  const { data } = useMoralisQuery(
    "Posts",
    (query) => query.descending("createdAt"),
    [],
    { live: true }
  );

  console.log(data);

  return (
    <div>
      {data.map((post) => {
        return (
          <Post
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

export default Posts;
