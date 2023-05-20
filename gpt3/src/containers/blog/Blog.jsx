import React from 'react'
import './blog.css'
import { Article   } from '../../components'
import blog01 from '../../assets/blog01.png'
import blog02 from '../../assets/blog02.png'
import blog03 from '../../assets/blog03.png'
import blog04 from '../../assets/blog04.png'
import blog05 from '../../assets/blog05.png'


const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>
          Its really fun learning React, it will be wise if you do too.
        </h1>

      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_popular'>
          <Article imgUrl={blog01} date="Jan-01-2023" title="How can you learn React Easily?" />

        </div>
        <div className='gpt3__blog-container_others'>
          <Article imgUrl={blog02} date="Jan-01-2023" title="How can you learn React Easily?" />
          <Article imgUrl={blog03} date="Jan-01-2023" title="How can you learn React Easily?" />
          <Article imgUrl={blog04} date="Jan-01-2023" title="How can you learn React Easily?" />
          <Article imgUrl={blog05} date="Jan-01-2023" title="How can you learn React Easily?" />

        </div>
      </div>
      
    </div>
  )
}

export default Blog
