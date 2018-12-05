import React, { Component } from 'react'
import css from '../index.css'

export default class Todos extends Component {
  render() {
    const {todos} = this.props
    const {completed} = this.props

    handleClick = () => {
      if(completed.status === "completed"){
        this.props.changeToComplete()
      }
    }

    return (
      <div>
        {
        todos.map((todo, i) => 
        <li onClick={this.handleClick} key={i} style={{textDecoration: completed ? 'line-through' : 'none'}}>
        {todo.content}
        </li>
        )}
      </div>
    )
  }
}