import React from 'react'

// export class Todo extends Component {
//   render() {
//     return (
//       <li>{ this.props.content } - { this.props.completed ? 'Completed' : 'Not Completed' }</li>
//     )
//   }
// }

const Todo = ({content, completed}) => {
  return (<li>
    {content} - {completed ? 'Completed' : 'Not Completed' }
  </li>)
}

export default Todo
