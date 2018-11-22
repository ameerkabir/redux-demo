import { FETCH_POSTS, NEW_POSTS } from "./types";
export const fetchPost = () => dispatch => {
  console.log("fetch is hiting here");
  debugger;
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(post =>
      dispatch({
        type: FETCH_POSTS,
        payload: post
      })
    );
};
export const creatPost = (postData) => dispatch => {
   console.log("hiff here")
  fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(postData)
    })
     .then(res=> res.json())
     .then(post => dispatch({
       type: NEW_POSTS,
       payload: post

     }))
  
};
