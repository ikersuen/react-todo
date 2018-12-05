import React, { Component } from 'react'
import { connect } from "react-redux";
import TodoList from '../components/TodoList'


const mapStateToProps = state => ({
  todo: state.todo,
  complete: state.complete
}); 

export default connect(mapStateToProps)(TodoList) 