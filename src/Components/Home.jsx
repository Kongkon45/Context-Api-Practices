import React, { useContext } from 'react'
import { CounterContext } from './Context'
import Category from './Category'

const Home = () => {
    const {count, setCount} = useContext(CounterContext)
  return (
    <div>
        <h1>Count is : {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <Category/>
    </div>
  )
}

export default Home