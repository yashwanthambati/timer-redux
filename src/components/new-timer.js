import React from "react";
import { connect } from "react-redux";

import { addTimer } from "../actions";

class NewTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="new Timer name"
          name="name"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <button
          onClick={(e) => {
            this.props.addTimer(this.state.name);
          }}
        >
          Save Button
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};

// Use 'mapDispatchToProps' to connect the 'newTimer' action creator to this component. Here is a stub for the component:
const mapDispatchToProps = () => {
  return { addTimer };
};
export default connect(mapStateToProps, mapDispatchToProps())(NewTimer);
