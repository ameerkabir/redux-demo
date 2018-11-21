import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index"
const intialState = {};
const midleware = [thunk];
const store = createStore(
  rootReducer,
  intialState,
  applyMiddleware(...midleware)
);
export default store;