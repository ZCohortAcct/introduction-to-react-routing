import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav.js';
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
          <Route />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
