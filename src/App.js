import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav.js';
import TodoList from './containers/TodoList';
import TodoNew from './containers/TodoNew';
import TodoShow from './containers/TodoShow';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
        <Switch>
          <div className="App">
            <Route exact path="/" render={(browserProps) => <TodoList {...browserProps} todos={this.state.todos} />} />
            <Route exact path="/new" render={(browserProps) => <TodoNew {...browserProps} createTodo={this.createTodo} />} />
            <Route exact path="/todos/:id" render={(browserProps) => <TodoShow {...browserProps} todos={this.state.todos} />} />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
