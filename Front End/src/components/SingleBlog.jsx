import React from 'react'
import './singleBlog.css'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useNavigate } from 'react-router-dom';

function SingleBlog({ singleblog }) {

    const navigate=useNavigate()

    function view(){
        navigate('viewblogdetails',)
    }

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
                <p className='parades'>{singleblog.blog_descrip}</p>
            </div >
            <div className='likeicons'>
                <ThumbUpOffAltIcon className='thumbicon' />
                <ThumbDownOffAltIcon className='thumbicon' />
                <CommentIcon className='thumbicon' />
                <OpenInNewIcon className='thumbicon' onClick={view}/>
            </div>
        </div >
    )
}

export default SingleBlog