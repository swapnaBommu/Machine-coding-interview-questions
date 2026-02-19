import React from 'react'
import { useCounter } from './CounterContext.jsx';
import { useState } from 'react';


const Counter = () => {
    const {count, increment, decrement, incrementBy,reset} = useCounter();
    
    const [incrementByVal, setIncrementByVal] = useState();
  return (
    <div>
      
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <input placeholder='Enter value to increment' 
            value={incrementByVal} 
            onChange={(e)=>{setIncrementByVal(Number(e.target.value))}}
            onKeyDown={(e)=> e.key === 'Enter' && incrementBy(incrementByVal)}
        />
      <button onClick={() => incrementBy(incrementByVal)}>Increment by Value</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter