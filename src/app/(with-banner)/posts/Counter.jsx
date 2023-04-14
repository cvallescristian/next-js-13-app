'use client'

import { useState } from "react"

export default function Counter() {
  const [counter, setCounter] = useState(0)
  const handleCounter = () => setCounter(counter + 1)

  return <div>
    <p>Count: {counter}</p>
    <button onClick={handleCounter}>Increment</button>
  </div>
}