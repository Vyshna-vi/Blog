import React, { useEffect, useState } from 'react'
import SingleBlog from './SingleBlog'
import axios from 'axios'
import { allBlogapi } from '../Api/api'
import './allblog.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom'


function AllBlog() {

    const [allBlogs, setAllBlogs] = useState()

    const navigate = useNavigate()

    async function viewAllBlog() {
        let res = await axios.get(allBlogapi)
        console.log(res);
        setAllBlogs(res.data.allBlog)
    }

    useEffect(() => { viewAllBlog() }, [])

    function back() {
        navigate('/addblog')
    }


    return (
        <div>
            <ArrowBackIosIcon className='arrowback' onClick={back} />
            <h1 className='allblogsmain'>Blogs</h1>
            <div className='allblogs'>
                {allBlogs && allBlogs.map((r) => {
                    return (
                        <SingleBlog singleblog={r} />
                    )
                })}
            </div>
        </div>
    )
}

export default AllBlog