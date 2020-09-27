import React, { useState } from "react"

const App = () => {
  const [count, setCount] = useState(0)
  return <div>
    <button id="button" onClick={() => setCount(count + 1)}>Add</button>
    <div id="count">{count}</div>
  </div>
}

export default App
