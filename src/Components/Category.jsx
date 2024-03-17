import React from 'react'
import CategoryDetails from './CategoryDetails'

const Category = ({count}) => {
  return (
    <div>
        <h3>This is category </h3>

        <CategoryDetails count={count}/>
    </div>
  )
}

export default Category