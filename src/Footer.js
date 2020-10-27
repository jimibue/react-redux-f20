import React from "react";
import { setFilter } from "./actions";
import { connect } from "react-redux";

function Footer({ filter, setFilter }) {
  const isActive = (type) => {
    if (type == filter) {
      return { border: "1px solid" };
    }
  };
  return (
    <div>
      <h1>Footer</h1>
      <div style={isActive("all")} onClick={() => setFilter("all")}>
        all
      </div>
      <div style={isActive("complete")} onClick={() => setFilter("complete")}>
        complete
      </div>
      <div style={isActive("todo")} onClick={() => setFilter("todo")}>
        todo
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { filter: state.filter };
};

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) => dispatch(setFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
