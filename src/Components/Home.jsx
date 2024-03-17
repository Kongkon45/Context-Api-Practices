import React from 'react'
import Category from './Category';

const Home = (props) => {
    const {count, setCount} = props;
  return (
    <div className='border-2'>
        <h1>Count is : {count}</h1>
        <button className='bg-blue-300 text-white py-1 px-4 rounded-lg ' onClick={()=>setCount(count+1)}>Increment</button>

        <Category count={count}/>
    </div>
  )
}

export default Home