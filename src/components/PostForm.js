import React, { Component } from "react";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handlSubmit = e => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(post)
    })
     .then(res=> res.json())
     .then(data => console.log(data))
  };
  render() {
    return (
      <div>
        <h1>Add post</h1>
        <form onSubmit={this.handlSubmit}>
          <div>
            <label>Title: </label> <br />
            <input
              onChange={this.onChange}
              value={this.state.title}
              type="text"
              name="title"
            />
          </div>
          <br />
          <div>
            <label>body: </label> <br />
            <textarea
              value={this.state.body}
              name="body"
              onChange={this.onChange}
            />
          </div>
          <br />
          <button value={this.state.body} type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default PostForm;
