import React, { Component } from "react";
import {connect} from "react-redux";
import {fetchPost} from "../actions/PostActions"

class Posts extends Component {
  
  componentDidMount(){
    this.props.fetchPost()
    debugger;
  }
  renderPosts = () => {
    const { posts } = this.props;

    return posts.map(post => {
      return (
        <div key={post.id}>
          <h4>{posts.title}</h4>
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
const mapStateToProps = ()=>{

}
export default connect(null,{fetchPost})(Posts);
