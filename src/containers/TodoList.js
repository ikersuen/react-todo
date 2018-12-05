import React, { Component } from 'react'
import TodoInput from '../components/TodoInput'
import Todos from '../components/Todos'
import { connect } from "react-redux";

class TodoList extends Component {
  
  addNewTodo = newTodo => {
    this.props.dispatch({
      type: "ADD_NEW_TODO",
      payload: newTodo
    })
  }
  render() {
    return (
      <div>
        <TodoInput onNewTodoAdded={this.addNewTodo}/>
        <Todos todos={this.props.todo}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todo: state.todo
}); 

connect(mapStateToProps)(TodoList)

export default connect(mapStateToProps)(TodoList) 