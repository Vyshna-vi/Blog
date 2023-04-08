import React, { useEffect, useRef, useState } from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import { TextareaAutosize } from '@mui/material';
import CommentComponent from './CommentComponent';
import './comment.css'
import { UserContext } from './Usercontext/UserContext';
import { useContext } from 'react';
import { viewCommentApi } from '../Api/api';
import axios from 'axios';
import { addCommentApi } from '../Api/api';
import { useLocation, useNavigate } from 'react-router-dom';

function ViewBlogInDetail() {

    const location = useLocation()

    const [refresh, setRefresh] = useState()

    console.log("location", location);

    const { loggedInUser } = useContext(UserContext)

    const [review, setReview] = useState()

    const [reviews, setReviews] = useState([])

    const navigate = useNavigate()

    const textRef = useRef()


    async function submit() {
        if (loggedInUser) {
            console.log("loggedinuser", loggedInUser);
            let comments = {
                comment: textRef.current.value,
                blog_id: location.state.singleblog._id,
                user_id: location.state.singleblog.author_id,
                user_name: loggedInUser.user_name
            }
            let response = await axios.post(addCommentApi, comments)
            console.log("response when command added", response);
            textRef.current.value = ""
            setRefresh(!refresh)
        } else {
            navigate('/login')
        }
    }

    async function viewCommant() {
        let responses = await axios.get(viewCommentApi + location.state.singleblog._id)
        console.log("responses", responses);
        setReviews(responses.data.singleComment)
    }
    useEffect(() => { viewCommant() }, [refresh])


    return (
        <div className='viewsingleblogdetails'>
            <div className='viewupper'>
                <p className='upperdate'>date_posted</p>
                <p className='uppername'>author_name</p>
                <p className='uppercategory'>category</p>
            </div>
            <div className='middle'>
                <div>
                    <p className='middletitle'>blog_title</p>
                </div>
                <div className='imgdiv'>
                    {/* <img src="https://wallpaperbat.com/img/236941-food-lunch-closeup-photography-colorful-wallpaper-hd.jpg" alt="" className='imgfood'/> */}
                    <p className='middledescrip'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque nobis aut accusamus laboriosam veritatis ratione ipsam incidunt deleniti numquam modi optio fugit ex ea, quaerat voluptas nesciunt maxime sapiente ab.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque nobis aut accusamus laboriosam veritatis ratione ipsam incidunt deleniti numquam modi optio fugit ex ea, quaerat voluptas nesciunt maxime sapiente ab.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque nobis aut accusamus laboriosam veritatis ratione ipsam incidunt deleniti numquam modi optio fugit ex ea, quaerat voluptas nesciunt maxime sapiente ab.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque nobis aut accusamus laboriosam veritatis ratione ipsam incidunt deleniti numquam modi optio fugit ex ea, quaerat voluptas nesciunt maxime sapiente ab.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque nobis aut accusamus laboriosam veritatis ratione ipsam incidunt deleniti numquam modi optio fugit ex ea, quaerat voluptas nesciunt maxime sapiente ab.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque nobis aut accusamus laboriosam veritatis ratione ipsam incidunt deleniti numquam modi optio fugit ex ea, quaerat voluptas nesciunt maxime sapiente ab.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque nobis aut accusamus laboriosam veritatis ratione ipsam incidunt deleniti numquam modi optio fugit ex ea, quaerat voluptas nesciunt maxime sapiente ab.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque nobis aut accusamus laboriosam veritatis ratione ipsam incidunt deleniti numquam modi optio fugit ex ea, quaerat voluptas nesciunt maxime sapiente ab.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque nobis aut accusamus laboriosam veritatis ratione ipsam incidunt deleniti numquam modi optio fugit ex ea, quaerat voluptas nesciunt maxime sapiente ab.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque nobis aut accusamus laboriosam veritatis ratione ipsam incidunt deleniti numquam modi optio fugit ex ea, quaerat voluptas nesciunt maxime sapiente ab.</p>
                </div >
            </div >
            <div className='thumbicons'>
                <ThumbUpOffAltIcon className='thumbicon2' />
                <ThumbDownOffAltIcon className='thumbicon2' />
                <CommentIcon className='thumbicon2' />
            </div>
            <div class="d-flex justify-content-center pt-3 pb-2">
                <div className='addcomt'>
                    <TextareaAutosize placeholder="Add comment..." class="form-control addtxt" ref={textRef} />
                    <button onClick={submit} className='commantbtn'>Submit</button>
                </div>
                {reviews.map((e) => {
                    return (
                        <CommentComponent comments={e} />
                    )
                })

                }
            </div>
        </div >
    )
}

export default ViewBlogInDetail