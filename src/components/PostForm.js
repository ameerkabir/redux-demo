import React, { Component } from "react";
import {connect} from "react-redux";
import {creatPost} from "../actions/PostActions";
import propTypes from "prop-types";
console.log(propTypes)

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
       this.props.creatPost(post)
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
PostForm.propTypes = {
  creatPost: propTypes.func.isRequired,
  newPost: propTypes.object

}
const mapStateToProps = (state) =>({
  newPost: state.posts.item
})
export default connect(mapStateToProps, {creatPost})(PostForm);
