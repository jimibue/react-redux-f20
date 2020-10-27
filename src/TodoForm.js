import React from "react";
import { connect } from "react-redux";

class TodoForm extends React.Component {
  state = { name: "" };
  componentDidMount() {
    // let res = axios.get("todos");
    this.props.dispatch({ type: "SET_TODOS", todos: ["work", "sleelp"] });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // dispatch action add todo dispatch({ type: "ADD_TODO", todo: "nap" });
    // let res = axios.post("todos");
    this.props.dispatch({ type: "ADD_TODO", todo: this.state.name });
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
export default connect()(TodoForm);
