import Image from "next/image";
import cardImage from "/public/image.svg";
import avatar from "/public/avatar.webp";
import "./blogCard.css";
import React from "react";

function BlogCard({ user, title, badge, description, postAt }) {
  return (
    <div className='card-container'>
      <div className='card-innerContainer'>
        <Image className='card-image' width={290} src={cardImage} />
        <div className='card-badge'>{badge}</div>
        <div className='card-postAt'>{postAt}</div>
        <div className='card-title'>{title}</div>
        <div className='card-description'>{description}</div>
        <div className='card-user'>
          <Image
            height={40}
            width={40}
            className='card-user-image'
            src={avatar}
          />
          <p className='card-user-name'>{user[1]}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
