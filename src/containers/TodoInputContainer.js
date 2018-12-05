import React, { Component } from 'react'
import { connect } from "react-redux";
import TodoInput from '../components/TodoInput'

const mapDispatchToProps = {
    addNewTodo: newTodo => ({
        type: "ADD_NEW_TODO",
      payload: newTodo
    })
}

export default connect(null, mapDispatchToProps)(TodoInput)