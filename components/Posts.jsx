import { useState } from "react";
import { Post } from "./index";

const Posts = () => {
  const [posts, setPosts] = useState([
    {
      id: "1",
      username: "testuser",
      profileImage: "https://picsum.photos/id/237/200/200",
      caption: "Work at Ledner - Kris",
      image:
        "https://ipfs.moralis.io:2053/ipfs/QmZps38W8GTavuBeRXFbbC22m5oxYDRiYP6DgZogwvNUsJ",
    },
    {
      id: "2",
      username: "asafasaasc",
      profileImage: "https://picsum.photos/id/236/200/200",
      caption: "Work at Feeney, Abshire and Tromp",
      image:
        "https://firebasestorage.googleapis.com/v0/b/instagram-clone-b0561.appspot.com/o/posts%2FBDW8da2DODRpJQmxoMlC%2Fimage?alt=media&token=88383e21-3be7-4b1d-8fe9-f2156635796f",
    },
    {
      id: "3",
      username: "sadcasca",
      profileImage: "https://picsum.photos/id/238/200/200",
      caption: "Work at Wunsch Inc",
      image:
        "https://firebasestorage.googleapis.com/v0/b/instagram-clone-b0561.appspot.com/o/posts%2FBDW8da2DODRpJQmxoMlC%2Fimage?alt=media&token=88383e21-3be7-4b1d-8fe9-f2156635796f",
    },
    {
      id: "4",
      username: "sdsacasca",
      profileImage: "https://picsum.photos/id/239/200/200",
      caption: "Work at Rutherford - Rohan",
      image:
        "https://firebasestorage.googleapis.com/v0/b/instagram-clone-b0561.appspot.com/o/posts%2FBDW8da2DODRpJQmxoMlC%2Fimage?alt=media&token=88383e21-3be7-4b1d-8fe9-f2156635796f",
    },
    {
      id: "5",
      username: "xaxxsxa",
      profileImage: "https://picsum.photos/id/227/200/200",
      caption: "Work at Moen - Hirthe",
      image:
        "https://firebasestorage.googleapis.com/v0/b/instagram-clone-b0561.appspot.com/o/posts%2FBDW8da2DODRpJQmxoMlC%2Fimage?alt=media&token=88383e21-3be7-4b1d-8fe9-f2156635796f",
    },
    {
      id: "6",
      username: "asd_sksc_s",
      profileImage: "https://picsum.photos/id/229/200/200",
      caption: "Work at Wunsch Inc",
      image:
        "https://firebasestorage.googleapis.com/v0/b/instagram-clone-b0561.appspot.com/o/posts%2FBDW8da2DODRpJQmxoMlC%2Fimage?alt=media&token=88383e21-3be7-4b1d-8fe9-f2156635796f",
    },
    {
      id: "7",
      username: "ascsama",
      profileImage: "https://picsum.photos/id/247/200/200",
      caption: "Work at Upton - Gislason",
      image:
        "https://firebasestorage.googleapis.com/v0/b/instagram-clone-b0561.appspot.com/o/posts%2FBDW8da2DODRpJQmxoMlC%2Fimage?alt=media&token=88383e21-3be7-4b1d-8fe9-f2156635796f",
    },
    {
      id: "8",
      username: "Paige60",
      profileImage: "https://picsum.photos/id/257/200/200",
      caption: "Work at Moen - Hirthe",
      image:
        "https://firebasestorage.googleapis.com/v0/b/instagram-clone-b0561.appspot.com/o/posts%2FBDW8da2DODRpJQmxoMlC%2Fimage?alt=media&token=88383e21-3be7-4b1d-8fe9-f2156635796f",
    },
  ]);

  return (
    <div>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            username={post.username}
            userImg={post.profileImage}
            image={post.image}
            caption={post.caption}
          />
        );
      })}
    </div>
  );
};

export default Posts;
