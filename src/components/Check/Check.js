import React, { Component } from "react";

export default class Check extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: true
    };
    this.toggle = this.toggleChange.bind(this);
  }

  toggleChange() {
    this.setState({
      isChecked: !this.state.isChecked
    });
    console.log('changed!')
  }

  render() {
    return (
      <label>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.toggle}
        />
        Check Me!
      </label>
    );
  }
}
