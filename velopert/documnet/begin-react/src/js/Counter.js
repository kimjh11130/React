import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECCREMENT':
      return state - 1
    default:
      return state
  }
}

function Counter() {
  const [number, dispatch] = useReducer(reducer, 0)

  const onInclease = () => {
    dispatch({ type: 'INCREMENT' })
  }
  const onDeclease = () => {
    dispatch({ type: 'DECREMENT' })
  }
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onInclease}>+1</button>
      <button onClick={onDeclease}>-1</button>
    </div>
  )
}

export default Counter