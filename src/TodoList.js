import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

function TodoList({ todos, filter }) {
  const renderTodos = () => {
    if (filter == "all") {
      return todos.map((t) => <Todo key={t.id} {...t} />);
    }
    if (filter == "complete") {
      return (
        todos
          // first filter array of javascript objects
          .filter((t) => t.complete)
          // then a create a new array of react components
          .map((t) => <Todo key={t.id} {...t} />)
      );
    }
    return (
      todos
        // first create react new array of react components
        .map((t) => <Todo key={t.id} {...t} />)
        // then filter that array of react components
        .filter((t) => !t.props.complete)
    );
  };
  return (
    <div>
      <h1>TodoList</h1>
      {renderTodos()}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { todos: state.todos, filter: state.filter };
};

export default connect(mapStateToProps)(TodoList);
