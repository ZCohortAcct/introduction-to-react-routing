import React, { Component } from 'react'

export class TodoNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      completed: false
    }
  }

  handleContent = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  }

  handleCompleted = e => {
    this.setState({
      completed: e.target.checked
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.createTodo(this.state);
    this.props.history.push("/");
  }

  render() {
    const {content, completed} = this.state;
    return (
      <div>
        <h1>Create Todo</h1>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <label>Content: </label>
          <input type="text" value={content} name="content" onChange={this.handleContent} /><br />
          <label>Completed: </label>
          <input type="checkbox" value={completed} name="completed" onChange={this.handleCompleted} /><br />
          <input type="submit" value="Create Todo" />
        </form>
      </div>
    )
  }
}

export default TodoNew
