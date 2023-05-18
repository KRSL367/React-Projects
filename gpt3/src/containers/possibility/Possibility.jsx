import React from 'react'
import './possibility.css'
import possibility  from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src= {possibility} alt='possibility' />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Try to learn as much as you can</h4>
        <h1 className='gradient__text'>
          You can Possibly be a master at React
        </h1>
        <p>Welcome to the ultimate course, where you will learn how to take Figma designs, turn them into four modern, responsive, beautifully-designed applications,</p>
        <h4>Don't miss your chance and Learn Now</h4>
      </div>
      
    </div>
  )
}

export default Possibility
