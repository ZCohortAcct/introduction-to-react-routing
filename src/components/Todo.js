import React from 'react'
import { Link } from 'react-router-dom';
// export class Todo extends Component {
//   render() {
//     return (
//       <li>{ this.props.content } - { this.props.completed ? 'Completed' : 'Not Completed' }</li>
//     )
//   }
// }

const Todo = ({content, completed, index}) => <li><Link to={`/todos/${index}`}>{content}</Link> - {completed ? 'Completed' : 'Not Completed' }</li>

export default Todo;
