import React from 'react'
import './features.css'
import { Feature } from '../../components'

const featuresData = [
  {
    title: 'Do your Best',
    text: 'Welcome to the ultimate course, where you will learn how to take Figma designs, turn them into four modern, responsive, beautifully-designed applications'
  },
  {
    title: 'Do your Best',
    text: 'Welcome to the ultimate course, where you will learn how to take Figma designs, turn them into four modern, responsive, beautifully-designed applications'  },
  {
    title: 'Do your Best',
    text: 'Welcome to the ultimate course, where you will learn how to take Figma designs, turn them into four modern, responsive, beautifully-designed applications'  },
  {
    title: 'Do your Best',
    text: 'Welcome to the ultimate course, where you will learn how to take Figma designs, turn them into four modern, responsive, beautifully-designed applications'  }
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>Need to learn alot about React and is fun learning React</h1>
        <p>Don't miss your chance and Learn Now</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item,index)=> (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}

      </div>
      
    </div>
  )
}

export default Features
