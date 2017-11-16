import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionsCreators from "../redux/actionCreators";
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
      actionsCreators: bindActionCreators(actionsCreators, dispatch)
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
    if(this.props.input) {
      this.props.actionsCreators.getPosts(this.props.input);
    } else {
      this.props.actionsCreators.getPosts();
    }
  }

  handleChange(e) {
    this.props.actionsCreators.updateSub(e);
  }

  handleSubmit(e) {
    e.preventDefault();
    let sub = this.props.input;
    this.props.actionsCreators.getPosts(sub);
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
          <div className="loader">Loading...</div>
        </div>
      );
    }
  }
}
