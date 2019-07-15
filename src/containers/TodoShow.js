import React, { Component } from 'react'
import Todo from '../components/Todo';

export class TodoShow extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <h3>{todo.content}</h3>
        <p>{todo.completed ? 'Great job checking stuff off!' : 'You need to take care of this'}</p>
      </div>
    )
  }
}

export default TodoShow;
