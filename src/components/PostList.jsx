// import React, { useReducer } from "react";
import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import MyInstagramLoader from "./LoadingSpinner";

const PostList = () => {
  const { postList, addFetchPost } = useContext(PostListData);
 

  return (
    <>
      {loadingData && <MyInstagramLoader />}

      {!loadingData && postList.length === 0 && <WelcomeMessage />}
      {!loadingData &&
        postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
