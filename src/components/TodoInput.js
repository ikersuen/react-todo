import React, { Component } from 'react'
import { connect } from "react-redux";

class TodoInput extends Component {
  dispatch = () => {
    const {input} = this.refs
    this.addNewTodo(input.value)
    input.value = ''
  }

  addNewTodo = newTodo => {
    this.props.dispatch({
      type: "ADD_NEW_TODO",
      payload: newTodo
    })
  }

  render() {
    return (
      <div>
        <input ref="input"/>
        <button onClick={this.dispatch}>add</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todo: state.todo
}); 

export default connect(mapStateToProps)(TodoInput) 
