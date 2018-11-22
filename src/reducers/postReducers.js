import {FETCH_POSTS, NEW_POSTS} from "../actions/types"
const intialState = {
  items: [],
  item: {}
}
export default  function(state = intialState, action){
switch(action.type){
  case FETCH_POSTS:
  console.log({action})
   return {
     ...state,
      items: action.payload
   
   }
   case NEW_POSTS:
   return {
     ...state,
     item: action.payload
   }
  default: 
  return state; 
}}