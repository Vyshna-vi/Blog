import './addblog.css'
import React, { useRef } from 'react'
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { UserContext } from '../Usercontext/UserContext';
import { useContext } from 'react';
import axios from 'axios';
import { addblogapi } from '../../Api/api';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function AddBlog() {

    const { loggedInUser } = useContext(UserContext)
    const titleRef = useRef()
    const descripRef = useRef()
    const categoryref = useRef()

    const navigate = useNavigate()

    async function submit() {

        let Blog = {
            blog_title: titleRef.current.value,
            blog_descrip: descripRef.current.value,
            author_name: loggedInUser.user_name,
            author_id: loggedInUser._id,
            date_posted: new Date().toDateString(),
            category: categoryref.current.value
        }

        let res = await axios.post(addblogapi, Blog)
        console.log("blog data", res);
        navigate('/singleuserblog')

    }

    function back() {
        navigate('/')
    }

    return (
        <div className='back'>
            <ArrowBackIosIcon className='arrowback add' onClick={back} />
            <div className='addblog'>
                <div className='addbloghead'>
                    <h1 className='mainhead'>Add Blog</h1>
                </div>
                <h4 className='blogtitle'>Title</h4>
                <TextareaAutosize placeholder='Enter Title' className='texttitle' ref={titleRef} />
                <h4 className='blogdescrip'>Description</h4>
                <TextareaAutosize placeholder='Enter Description' className='textdescrip' minRows={5}  style={{height:100}} ref={descripRef} />
                <label for="category" className='labelcat'>Category:</label>
                <select name="category" className="categories" ref={categoryref}>
                    <option value="React">React</option>
                    <option value="Express">Express</option>
                    <option value="MongoDB">MongoDB</option>
                    <option value="HTML-CSS">HTML-CSS</option>
                </select>
                <div className='btns'>
                    <button className='addbtn' onClick={submit}>ADD BLOG</button>
                </div>
            </div>
        </div>
    )
}

export default AddBlog