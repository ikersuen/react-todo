const initialState = {
    todo: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "ADD_NEW_TODO":
    const todo = state.todo.concat(payload)
    return { ...state, todo }

  default:
    return state
  }
}
