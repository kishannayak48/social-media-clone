import React, { useContext } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { PostList } from "../store/post-list-store";
import { FcLike } from "react-icons/fc";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card past-card" style={{ width: "30rem" }}>
      <div className="card-body ">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <FaDeleteLeft />
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            #{tag}
          </span>
        ))}
      </div>
      <div className="alert alert-success" role="alert">
        <button className="button-like">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-heart-fill"
            // viewBox="0 0 16 16"
            color="red"
          >
            <path
              fillRule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
            />
          </svg>
          {post.reactions.likes}
        </button>
        <button className="button-dislike">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-heartbreak-fill"
            viewBox="0 0 16 16"
            color="red"
          >
            {""}
            <path d="M8.931.586 7 3l1.5 4-2 3L8 15C22.534 5.396 13.757-2.21 8.931.586M7.358.77 5.5 3 7 7l-1.5 3 1.815 4.537C-6.533 4.96 2.685-2.467 7.358.77" />
          </svg>
          {""}
          {post.reactions.dislikes}
        </button>
      </div>
    </div>
  );
};

export default Post;
