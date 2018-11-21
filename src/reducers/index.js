import {combineReducers} from "redux";
import postsReducers from "./postReducers";
export default combineReducers({
  posts: postsReducers 
})