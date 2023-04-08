import React, { useEffect } from 'react'
import './comment.css'


function CommentComponent({ comments }) {


    return (
        <div class="container justify-content-center mt-5 border-left border-right">
            <div class="d-flex justify-content-center py-2">
                <div class="second py-2 px-2">
                    <h4 className='text2'>{comments.user_name}</h4>
                    <p className='text1'>{comments.comment}</p>
                </div>
            </div>
        </div>
    )
}

export default CommentComponent