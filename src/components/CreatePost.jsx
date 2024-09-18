import React, { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const postReactionElement = useRef();
  const postTagsElement = useRef();

  const handelSubmit = (event) => {
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const postReaction = postReactionElement.current.value;
    const postTags = postTagsElement.current.value.split(" ");
    if (
      !userId ||
      !postTitle ||
      !postBody ||
      !postReaction ||
      !postTags.length
    ) {
      alert("All fields are required");
      return;
    }
    event.preventDefault();
    event.target.reset();
    addPost({ userId, postTitle, postBody, postReaction, postTags });
  };

  return (
    <form className="post-add" onSubmit={handelSubmit}>
      <div className="mb-3">
        <label htmlFor="userIdElement" className="form-label">
          User ID
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder=" Enter user ID"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="userIdElement" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder=" enter post Title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="userIdElement" className="form-label">
          Post Description
        </label>
        <textarea
          rows={3}
          type="text"
          ref={postBodyElement}
          className="form-control"
          id="body"
          placeholder=" enter your post description"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="userIdElement" className="form-label">
          User Reactions
        </label>
        <input
          type="text"
          ref={postReactionElement}
          className="form-control"
          id="body"
          placeholder="people reaction enter here"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="userIdElement" className="form-label">
          Post HashTags
        </label>
        <input
          type="text"
          ref={postTagsElement}
          className="form-control"
          id="body"
          placeholder="title related hashtag enter"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
