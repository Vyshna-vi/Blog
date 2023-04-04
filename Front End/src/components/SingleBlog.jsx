import React from 'react'
import './singleBlog.css'

function SingleBlog({singleblog}) {
    return (
        <div className="card">
            <p className='para'>{singleblog.blog_title}</p>
            <p className='para'>{singleblog.blog_descrip}</p>
            <p className='para'>{singleblog.date_posted}</p>
            <p className='para'>{singleblog.author_name}</p>
            <p className='para'>{singleblog.author_id}</p>
        </div>
    )
}

export default SingleBlog