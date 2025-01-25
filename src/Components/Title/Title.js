import React from 'react'
import './Title.css'

const Title = ({subtitle,title}) => {
  return (
    <div className='title container'>
        <p>{subtitle}</p>
        <h4>{title}</h4>
    </div>
  )
}

export default Title
