import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions';

@connect((store) => {
  return {
    ready: store.ready,
    data: store.data
  }
}, (dispatch) => {
  return {
      actions: bindActionCreators(actions, dispatch)
  }
})

export default class App extends Component {

  componentWillMount() {
    //this.props.getData
  }

	render() {

    console.log(this.props)

    const { data, ready } = this.props;
    const posts = data.data.children.map(child => 
      <div key={child.data.id}>
        <p>{child.data.subreddit}</p>
        <p>{child.data.title}</p>
      </div>)

    if(ready) {
      return (
          <div>
            { posts }
          </div>
      );
    } else {
      return(
        <div>
          <p>Loading...</p>
        </div>
      );
    }
	}
}

