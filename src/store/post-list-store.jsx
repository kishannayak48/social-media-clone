import { createContext, useEffect, useReducer, useState } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  // addFetchPost: () => {}, // For fetching posts from an API or other data source
  deletePost: () => {},
});
const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_FETCH_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

// eslint-disable-next-line react/prop-types
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    setLoadingData(true);

    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addFetchPost(data.posts);
        setLoadingData(false);
      });

    return () => {
      console.log("cleaning up UseEffect");
      controller.abort();
    };
  }, []);
  const addPost = ({
    userId,
    postTitle,
    postBody,
    postReaction,
    postTags,
    like,
    dislike,
  }) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: postReaction,
        userId: userId,
        tags: postTags,
        like: like,
        dislike: dislike,
        comment: userComment,
        userLike: false,
        userDislike: false,
        userComment: "",
      },
    });
  };
  const addFetchPost = (posts) => {
    dispatchPostList({
      type: "ADD_FETCH_POSTS",
      payload: {
        posts,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostList.Provider value={{ postList, addPost, loadingData, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
