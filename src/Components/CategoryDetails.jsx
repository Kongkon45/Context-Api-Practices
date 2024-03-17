import React, { useContext } from 'react'
import { CounterContext } from './Context'

const CategoryDetails = () => {
    const {count, setCount} = useContext(CounterContext)
  return (
    <div>
        CategoryDetails : {count}
        <button onClick={()=>setCount(count+2)}>Increment</button>
    </div>
    
  )
}

export default CategoryDetails