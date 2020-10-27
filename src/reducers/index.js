import { combineReducers } from "redux";
import todos from "./todos";

const rootReducer = combineReducers({
  // here we combine all of our apps reducers into 1 root reducer
  todos,
});

export default rootReducer;
