import React, { Component } from 'react'
import { connect } from "react-redux";
import TodoInput from '../components/TodoInput'

const mapDispatchToProps = (dispatch) => ({
    addNewTodo: newTodo => {
        const newTodoItem = {
            content: newTodo,
            status: "active"
        }
        fetch("http://localhost:8080/api/todos", {
            method: 'POST', 
            headers: new Headers({'Content-Type': 'application/json'}), 
            mode: 'cors', 
            body: JSON.stringify(newTodoItem)
        })
        .then(res => res.json())
        .then(({id, status, content}) => {
            dispatch({
                type: "ADD_NEW_TODO",
                payload: {id, status, content}
            })
        })
        // .then(res => {
        //     dispatch({
        //         type: "ADD_NEW_TODO",
        //         payload: {
        //             id: res.id,
        //             content: res.content,
        //             status: res.status
        //         }
        //     })
        // })
        
    }
})

export default connect(null, mapDispatchToProps)(TodoInput)