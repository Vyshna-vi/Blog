import React from 'react'
import './singleBlog.css'

function SingleBlog({ singleblog }) {
    return (
        <div className="card">
            <div className='cardupper'>
                <p className='com1'>{singleblog.author_name}</p>
                <p className='com2'>{singleblog.date_posted}</p>
            </div>
            <hr />
            <p className='com3'>{singleblog.author_id}</p>
            <div className='bottom'>
                <p className='head1'>{singleblog.blog_title}</p>
                <p className='parades'>{singleblog.blog_descrip}</p>
            </div >
        </div >
    )
}

export default SingleBlog