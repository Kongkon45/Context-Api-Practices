import React, { useContext } from 'react'
import { categoryContext } from '../App'

const About = () => {
  const category = useContext(categoryContext)
  return (
    <div>About :{category}</div>
  )
}

export default About