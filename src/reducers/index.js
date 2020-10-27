import { combineReducers } from "redux";
import todos from "./todos";
import nextId from "./nextId";
import filter from "./filter";

const rootReducer = combineReducers({
  // here we combine all of our apps reducers into 1 root reducer
  todos,
  nextId,
  filter,
});

export default rootReducer;
