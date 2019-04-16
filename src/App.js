import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import Nav from './components/Nav.js';
import TodoList from './containers/TodoList';
import TodoNew from './containers/TodoNew';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: []
    }
  }

  createTodo = todo => {
    this.setState({
      todos: this.state.todos.concat(todo)
    });
  }

  render() {
    return (
      <Router>
        <Nav />
        <div className="App">
          <Switch>
            <Route exact path="/" render={(props) => <TodoList {...props} todos={this.state.todos} />} />
            <Route exact path="/new" render={(props) => <TodoNew {...props} createTodo={this.createTodo} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
