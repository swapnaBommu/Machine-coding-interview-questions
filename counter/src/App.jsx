import { useState } from 'react'
import { CounterProvider } from './CounterContext'
import Counter from './Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </>
  )
}

export default App
