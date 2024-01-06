 import Image from 'next/image'
import cardImage from '../../../../public/image.svg'
import avatar from './../../../../public/avatar.webp'
import './blogCard.css'
import React from 'react'

function BlogCard({}) {
  return (
    <div className='card-container'>
        <div className='card-innerContainer'>

        <Image
        className='card-image'
        width={290}
        src={cardImage}
        />
        <div className='card-badge'>Learning</div>
        <div className='card-postAt'>Published 21 Dec 2023</div>
        <div className='card-title'>HTML & CSS foundations</div>
        <div className='card-description'>
            These languages are the backbone of every website,defining structure,content and presentation
        </div>
        <div className='card-user'>
         <Image
         height={40}
         className='card-user-image'
         src={avatar}/>
         <p className='card-user-name'>Gerg Hooper</p>
        </div>
        </div>
    </div>
  )
}

export default BlogCard