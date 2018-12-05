const initialState = {
    todo: [],
    complete: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "ADD_NEW_TODO":
    const todo = state.todo.concat(payload)
    return { ...state, todo }

  case "CHANGE_STATUS":
    const complete = state.complete.concat(payload)
    return {...state, complete}

  default:
    return state
  }
}
