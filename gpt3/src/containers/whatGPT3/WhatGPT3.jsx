import React from 'react'
import './whatGPT3.css'
import Feature from '../../components/feature/Feature'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is GPT-3" text="Welcome to the ultimate course, where you will learn how to take Figma designs, turn them into four modern, responsive, beautifully-designed applications, and get hired as a front-end developer. All the way from design, over development, to deployment on your own web development portfolio!"/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>It is quite fun learning React</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="ChatBot" text="Welcome to the ultimate course, where you will learn how to take Figma designs, turn them into four modern, responsive, beautifully-designed applications," />
        <Feature title="KnowledgeBase" text="Welcome to the ultimate course, where you will learn how to take Figma designs, turn them into four modern, responsive, beautifully-designed applications,"/>
        <Feature title="Education" text="Welcome to the ultimate course, where you will learn how to take Figma designs, turn them into four modern, responsive, beautifully-designed applications,"/>

      </div>
      
    </div>
  )
}

export default WhatGPT3
