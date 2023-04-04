import './addblog.css'
import React, { useRef } from 'react'
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { UserContext } from './Usercontext/UserContext';
import { useContext } from 'react';
import axios from 'axios';
import { addblogapi } from '../Api/api';
import { useNavigate } from 'react-router-dom';

function AddBlog() {

    const { loggedInUser } = useContext(UserContext)
    const titleRef = useRef()
    const descripRef = useRef()

    const navigate = useNavigate()

    async function submit() {

        let Blog = {
            blog_title: titleRef.current.value,
            blog_descrip: descripRef.current.value,
            author_name: loggedInUser.user_name,
            author_id: loggedInUser._id,
            date_posted: new Date().toDateString()
        }

        let res = await axios.post(addblogapi, Blog)
        console.log("blog data", res);
        navigate('/allblog')

    }

    function viewBlog() {
        navigate('/singleuserblog')
    }

    return (
        <div className='back'>
            <div className='addblog'>
                <div className='addbloghead'>
                    <h1 className='mainhead'>Add Blog</h1>
                </div>
                <h4 className='blogtitle'>Title</h4>
                <TextareaAutosize placeholder='Enter Title' className='texttitle' ref={titleRef} />
                <h4 className='blogdescrip'>Description</h4>
                <TextareaAutosize placeholder='Enter Description' className='textdescrip' minRows={5} ref={descripRef} />
                <div className='btns'>
                    <button className='addbtn' onClick={submit}>Add Blog</button>
                    <button className='viewblogbtn' onClick={viewBlog}>View Blog</button>
                </div>
            </div>
        </div>
    )
}

export default AddBlog