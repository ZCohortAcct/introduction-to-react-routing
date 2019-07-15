import React from 'react'
import { Link } from 'react-router-dom';
// export class Todo extends Component {
//   render() {
//     return (
//       <li>{ this.props.content } - { this.props.completed ? 'Completed' : 'Not Completed' }</li>
//     )
//   }
// }

const Todo = ({content, completed}) => <li>content: {content}<br />
completed: {completed ? 'yes' : 'no'}</li>

export default Todo;
