import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id= 'home'>
      <div className='gpt3__header-content'>
          <h1 className='gradient__text'>Learning how to build a responsive website using React</h1>
          <p>Lorem Tempora repellat tempore facilis neque cum unde ex modi eveniet commodi, ad doloribus consectetur maxime nulla quas? Necessitatibus accusamus nemo corrupti qui?</p>
          <div className='gpt3__header-content_input'>
            <input type='email' placeholder='Email Address'></input>
            <button type='button'>Get started</button>
          </div>
          <div className='gpt3__header-content_visitors'>
            <img src={people} alt='visitors'/>
            <p>There were quite few visitors while you were away</p>
          </div>
      </div>
      <div className='gpt3__header_ai'>
            <img src={ai} alt='ai'/>
          </div>
    </div>
  )
}

export default Header
