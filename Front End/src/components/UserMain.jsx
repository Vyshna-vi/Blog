import React, { useEffect, useState } from 'react'
import SingleUserBlog from './SingleUserBlog'
import { UserContext } from './Usercontext/UserContext';
import { useContext } from 'react';
import { singleUserBlog } from '../Api/api';
import axios from 'axios';
import './singleuserblog.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';


function UserMain() {

    const [singleUserBlogs, setSingleUserBlogs] = useState()
    const { loggedInUser } = useContext(UserContext)

    const navigate=useNavigate()

    async function fetchuserblogs() {
        let singleBlog = await axios.get(singleUserBlog + loggedInUser._id)
        console.log("sinleuserblog", singleBlog);
        setSingleUserBlogs(singleBlog.data.singleBlog)
    }
    useEffect(() => {
        if (loggedInUser)
            fetchuserblogs()
    }, [loggedInUser])

    function back(){
        navigate('/')
    }

    return (
        <div className='addedblogs'>
            <ArrowBackIosIcon  className='arrowback add1' onClick={back}/>
            <div className="arrow">
            <h1 className='headadd'>Added Blogs</h1>
            </div>
            <div className='allsingleblog'>
                {singleUserBlogs && singleUserBlogs.map((b) => {
                    return (
                        <SingleUserBlog Blog={b} />
                    )
                })}
            </div>
        </div>
    )
}

export default UserMain