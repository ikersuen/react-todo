import React, { Component } from 'react';
import TodoList from '../containers/TodoList.js'

class App extends Component {
  render() {
    return (
      <div>
        <TodoList/>
      </div>
    );
  }
}

export default App;