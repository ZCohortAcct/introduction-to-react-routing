import React, { Component } from 'react'
import ToDo from '../components/Todo';

export class TodoList extends Component {
  render() {
    let list = this.props.todos.map((todo, idx) => <ToDo key={idx+1} content={todo.content} completed={todo.completed} />)

    return (
      <div>
        <h1>Todo List</h1>
        <hr />
        {
          list.length > 0 ? <ul>{list}</ul> : <p>You haven't created any todos yet.</p>
        }
      </div>
    )
  }
}

export default TodoList
