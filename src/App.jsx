import React, { createContext, useState } from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'

export const categoryContext = createContext();
const App = () => {
  const [count, setCount] = useState(0)
  return (
    <categoryContext.Provider value={count} className='text-center'>
      <p>count : {count}</p>
      <Home count={count} setCount={setCount}/>
      <About/>
      <Contact/>
    </categoryContext.Provider>
  )
}

export default App