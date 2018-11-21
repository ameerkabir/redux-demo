import { FETCH_POSTS, NEW_POSTS } from "./types";
export const fetchPost = () => dispatch => {
  console.log("fetch is hiting here");
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(post =>
      dispatch({
        type: FETCH_POSTS,
        payload: post
      })
    );
};
