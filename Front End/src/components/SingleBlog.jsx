import React from 'react'
import './singleBlog.css'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import CommentIcon from '@mui/icons-material/Comment';

function SingleBlog({ singleblog }) {
    return (
        <div className="card">
            <div className='cardupper'>
                <p className='com1'>{singleblog.author_name}</p>
                <p className='com2'>{singleblog.date_posted}</p>
                <p className='com3'>{singleblog.category}</p>
            </div>
            <hr className='hr3' />
            <div className='bottom'>
                <p className='head1'>{singleblog.blog_title}</p>
                <p className='parades'>{singleblog.blog_title}</p>
            </div >
            <div className='likeicons'>
                <ThumbUpOffAltIcon className='thumbicon' />
                <ThumbDownOffAltIcon className='thumbicon' />
                <CommentIcon className='thumbicon' />
            </div>
        </div >
    )
}

export default SingleBlog