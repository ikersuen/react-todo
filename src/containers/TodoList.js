import React, { Component } from 'react'
import TodoInput from '../components/TodoInput'
import Todos from '../components/Todos'
import { connect } from "react-redux";

class TodoList extends Component {
  render() {
    return (
      <div>
        <TodoInput/>
        <Todos todos={this.props.todo}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todo: state.todo
}); 

export default connect(mapStateToProps)(TodoList) 