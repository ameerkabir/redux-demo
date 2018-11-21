export const FETCH_POSTS = "FETCH_POSTS";
export const NEW_POSTS = "NEW_POSTS";
const intialState = {
  items: [],
  item: {}
}
export default  function(state = intialState, action){
switch(action.type){
  default: 
  return state; 
}}