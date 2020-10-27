import React from "react";
import { connect } from "react-redux";

const Todo = ({ name, id, complete, dispatch }) => {
  return (
    <p
      onClick={() => dispatch({ type: "TOGGLE_TODO", id: id })}
      style={complete ? { textDecoration: "line-through", color: "grey" } : {}}
    >
      {name}
    </p>
  );
};

export default connect()(Todo);
