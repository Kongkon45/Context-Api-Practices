import React, { useContext } from 'react'
import { categoryContext } from '../App'

const CategoryDetails = ({count}) => {
    const category = useContext(categoryContext)
  return (
    <div>
        <h5>This is category details : {count}</h5>
        <p>Category data is : {category}</p>
    </div>
  )
}

export default CategoryDetails