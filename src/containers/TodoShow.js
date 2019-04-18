import React, { Component } from 'react'
import Todo from '../components/Todo';

export class TodoShow extends Component {
  render() {
    console.log(this.props);
    let todo = this.props.todos[this.props.match.params.id];
    return (
      <div>
      { todo ? <React.Fragment><h1>{todo.content}</h1>
          <p>{todo.completed ? 'You have completed this todo' : 'You have not completed this todo'}</p></React.Fragment> : <h2>This todo doesn't exist</h2>
      }
      </div>
    )
  }
}

export default TodoShow;
