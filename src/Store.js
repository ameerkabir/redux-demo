import { createSotre, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducers"
const intialState = {};
const midleware = [thunk];
const Store = createSotre(
  RootReducer,
  intialState,
  applyMiddleware(...midleware)
);
export default Store;