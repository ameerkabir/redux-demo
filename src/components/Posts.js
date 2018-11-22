import React, { Component } from "react";
import {connect} from "react-redux";
import propTypes from "prop-types";

import {fetchPost} from "../actions/PostActions"

class Posts extends Component {
  
  componentDidMount(){
    console.log(this.props)
    this.props.fetchPost()
  }
  componentWillReceiveProps(nextProps){
    console.log('new props',nextProps.newPost)
    if(nextProps.newPost){
      this.props.posts.unshift(nextProps.newPost)
    }
  }
  renderPosts = () => {
    console.log(this.props)
    const { posts } = this.props;

    return posts.map(post => {
      return (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <h1>Posts</h1>
        {this.renderPosts()}{" "}
      </div>
    );
  }
}
Posts.propTypes = {
  fetchPost: propTypes.func.isRequired,
  newPost: propTypes.object

}
const mapStateToProps = state =>({
posts: state.posts.items,
newPost: state.posts.item
})
console.log(fetchPost())
export default connect(mapStateToProps,{fetchPost})(Posts);
