import React from "react";
import { connect } from "react-redux";

function TodoList({ todos }) {
  return (
    <div>
      <h1>TodoList</h1>
      {todos.map((t, i) => {
        return (
          <div key={i}>
            <p>{t}</p>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

export default connect(mapStateToProps)(TodoList);
