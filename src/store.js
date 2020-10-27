import { createStore, compose } from "redux";

// need to create this 'root' reducer
import rootReducer from "./reducers/index";

// seting up devtools, the extension we just installed
const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);

// creating store (from diagram)
const store = createStore(rootReducer, {}, enhancers);

// setup for hot reloading
if (module.hot) {
  module.hot.accept("./reducers/", () => {
    const nextRootReducer = require("./reducers/index").default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
