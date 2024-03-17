import React, { useState } from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import { CounterContext } from './Components/Context'


const App = () => {
  const [count, setCount] = useState(0)
  return (
    <CounterContext.Provider value={{count, setCount}}>
      <div>
      <Home/>
      <About/>
      <Contact/>
    </div>
    </CounterContext.Provider>
  )
}

export default App