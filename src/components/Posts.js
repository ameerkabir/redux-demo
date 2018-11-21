import React, { Component } from "react";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(post => this.setState({ posts: post }));
  }
  renderPosts = () => {
    const { posts } = this.state;

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
export default Posts;
