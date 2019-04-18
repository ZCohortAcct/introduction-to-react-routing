import React, { Component } from 'react'
import Todo from '../components/Todo';

export class TodoList extends Component {
  render() {
    let todos = this.props.todos.map((todo, i) => {
      return <Todo key={i} content={todo.content} completed={todo.completed} index={i} />
    })

    return (
      <div>
        <h1>Todo List</h1>
        <hr />
        {
          todos.length > 0 ? <ul>{todos}</ul> : <p>You haven't created any todos yet.</p>
        }
      </div>
    )
  }
}

export default TodoList
