import React, { Component } from 'react'
import { connect } from "react-redux";
import TodoList from '../components/TodoList'


const mapStateToProps = state => ({
  todo: state.todo
}); 

export default connect(mapStateToProps)(TodoList) 