/*eslint-disable no-unused-vars */
import React, { PropTypes } from 'react'

const Counter = ({ value, onIncrementAsync, onIncrement, onDecrement }) =>
      <div>
        <button onClick={onIncrementAsync}>
            Async Increment
        </button>
        <button onClick={onIncrement}>
          Increment
        </button>
        {' '}
        <button onClick={onDecrement}>
          Decrement
        </button>
        <hr />
        <div>
          Clicked: {value} times
        </div>
      </div>

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter
