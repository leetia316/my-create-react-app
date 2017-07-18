function counter(state = {value : 0}, action) {
  switch (action.type) {
    case 'INCREASE':
      return Object.assign({}, state, {
        value: state.value + 1
      })
    case 'DECREASE':
    	return Object.assign({}, state, {
        value: state.value - 1
      })
    default:
      return state
  }
}

export default counter