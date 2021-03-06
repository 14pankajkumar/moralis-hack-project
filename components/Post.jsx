import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsChat } from "react-icons/bs";
import { IoPaperPlaneOutline, IoDiamondOutline } from "react-icons/io5";
import { BiHappy } from "react-icons/bi";
import { useState } from "react";
import Moment from "react-moment";

const Post = ({ id, username, image, caption }) => {
  const [comment, setComment] = useState("");
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([
    {
      id: id,
      username: username,
      comment: "Nice pic",
    },
  ]);

  const sendComment = (e) => {
    e.preventDefault();
    console.log("comment button clicked");
    setComment("");
  };

  return (
    <div className="white-glassmorphism my-7 border rounded-sm">
      {/* Header */}
      <div className="flex items-center p-5">
        <img
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          src={`https://avatars.dicebear.com/api/pixel-art/${username}.svg`}
          alt=""
        />
        <p className="flex-1 font-bold">{username}</p>
        <FiMoreHorizontal className="h-5" fontSize={25} />
      </div>

      {/* image */}
      <img className="object-cover w-full" src={image} alt="" />

      {/* buttons */}
      <div className="flex justify-between px-4 py-4">
        <div className="flex space-x-4">
          {liked ? (
            <AiFillHeart
              color="red"
              className="btn"
              fontSize={25}
              onClick={() => setLiked(false)}
            />
          ) : (
            <AiOutlineHeart
              className="btn"
              fontSize={25}
              onClick={() => setLiked(true)}
            />
          )}
          <BsChat className="btn" fontSize={25} />
          <IoPaperPlaneOutline className="btn" fontSize={25} />
        </div>

        <IoDiamondOutline className="btn" fontSize={25} />
      </div>

      {/* captions */}
      <div className="p-5 truncate">{caption}</div>

      {/* comments */}
      {comments.length > 0 && (
        <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {comments.map((comment) => {
            return (
              <div
                key={comment.id}
                className="flex items-center space-x-2 mb-3"
              >
                <img className="h-7 rounded-full" src={comment.ethAdd} alt="" />
                <p className="text-sm flex-1">
                  <span className="font-bold">{comment.username} </span>
                  {comment.comment}
                </p>

                <Moment className="pr-5 text-sm" fromNow>
                  {/* {comment.data().timestamp?.toDate()} */}
                </Moment>
              </div>
            );
          })}
        </div>
      )}

      {/* input box */}
      <form className="flex items-center p-4">
        <BiHappy className="h-7" fontSize={25} />
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment..."
          type="text"
          className="mx-2 border-none flex-1 focus:ring-0 outline-none blue-glassmorphism"
        />
        <button
          onClick={sendComment}
          type="submit"
          disabled={!comment.trim()}
          className="font-semibold"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default Post;
