import React from 'react'
import './singleuserblog.css'

function SingleUserBlog(singleuserBlog) {
  return (
    <div className='userblog'>
        <p>{singleuserBlog.blog_title}</p>
        <p>{singleuserBlog.blog_descrip}</p>
        <p>{singleuserBlog.author_name}</p>
        <p>{singleuserBlog.author_id}</p>
        <p>{singleuserBlog.date_posted}</p>
    </div>
  )
}

export default SingleUserBlog