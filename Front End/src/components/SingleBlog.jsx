import React from 'react'
import './singleBlog.css'

function SingleBlog({singleblog}) {
    return (
        <div className="card">
            <p>{singleblog.blog_title}</p>
            <p>{singleblog.blog_descrip}</p>
            <p>{singleblog.date_posted}</p>
            <p>{singleblog.author_name}</p>
            <p>{singleblog.author_id}</p>
        </div>
    )
}

export default SingleBlog