import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import Post from "./Post.jsx";

@connect(
  store => {
    return {
      ready: store.ready,
      data: store.data,
      input: store.input
    };
  },
  dispatch => {
    return {
      actions: bindActionCreators(actions, dispatch)
    };
  }
)

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.props.actions.getData();
  }

  handleChange(e) {
    this.props.actions.updateField(e);
  }

  handleSubmit(e) {
    e.preventDefault();
    let sub = this.props.input;
    this.props.actions.getData(sub);
  }

  createPost(post) {
    return <Post key={post.data.id} data={post} />;
  }

  render() {
    const { data, ready, input } = this.props;

    if (ready) {
      return (
        <div>
        <h1 className="center">Rocket <i className="fa fa-rocket" aria-hidden="true"></i></h1>
        <h2 className="center">An <em className="primary">awesome</em> Reddit client</h2>
          <form className="sub-search" onSubmit={this.handleSubmit}>
            <input
              placeholder="/r/"
              type="text"
              value={this.props.input}
              onChange={this.handleChange}
            />
            <button>Go</button>
          </form>
          {data.data.children.map(this.createPost)}
        </div>
      );
    } else {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }
  }
}
