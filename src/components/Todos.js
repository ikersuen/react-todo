import React, { Component } from 'react'
import { connect } from "react-redux";

class Todos extends Component {
  render() {
    return (
      <div>
        {this.props.todo.map((todo, i) => <li key={i}>{todo}</li>)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todo: state.todo
}); 

export default connect(mapStateToProps)(Todos) 