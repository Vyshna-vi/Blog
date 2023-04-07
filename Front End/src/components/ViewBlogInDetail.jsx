import React from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import CommentIcon from '@mui/icons-material/Comment';

function ViewBlogInDetail() {
    return (
        <div className="viewsingleblogdetails">
            <div className='viewupper'>
                <p className='uppername'>author_name</p>
                <p className='upperdate'>date_posted</p>
                <p className='uppercategory'>category</p>
            </div>
            <hr className='hr5' />
            <div className='middle'>
                <p className='middletitle'>blog_title</p>
                <p className='middledescrip'>blog_descrip</p>
            </div >
            <div className='thumbicons'>
                <ThumbUpOffAltIcon className='thumbicon2' />
                <ThumbDownOffAltIcon className='thumbicon2' />
                <CommentIcon className='thumbicon2' />
            </div>
        </div >
    )
}

export default ViewBlogInDetail