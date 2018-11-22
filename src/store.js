import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index"
const intialState = {};
const midleware = [thunk];
const store = createStore(
  rootReducer,
  intialState,
  compose( 
    applyMiddleware(...midleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )   
);
export default store;