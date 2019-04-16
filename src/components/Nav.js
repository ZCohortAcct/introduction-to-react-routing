import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to="/">Todo List</Link></li> | 
          <li><Link to="/new">Create Todo</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Nav
