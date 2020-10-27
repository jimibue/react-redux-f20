import React from "react";
import { connect } from "react-redux";
import nextId from "./reducers/nextId";

class TodoForm extends React.Component {
  state = { name: "" };
  componentDidMount() {
    // let res = axios.get("todos");
    this.props.dispatch({
      type: "SET_TODOS",
      todos: [{ id: 2345798, name: "toggle todos", complete: true }],
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // dispatch action add todo dispatch({ type: "ADD_TODO", todo: "nap" });
    // we can't quite do this it isn't just this
    // let res = axios.post("todos");
    const newTodo = {
      name: this.state.name,
      complete: false,
      id: this.props.id,
    };
    this.props.dispatch({ type: "ADD_TODO", todo: newTodo });
    this.props.dispatch({ type: "INC_ID" });
    this.setState({ name: "" });
  };
  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };
  render() {
    return (
      <div>
        <h1>Add Todo</h1>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.name} onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { id: state.nextId };
};
export default connect(mapStateToProps)(TodoForm);
