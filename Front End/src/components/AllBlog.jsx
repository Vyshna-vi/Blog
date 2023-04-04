import React, { useEffect, useState } from 'react'
import SingleBlog from './SingleBlog'
import axios from 'axios'
import { allBlogapi } from '../Api/api'
import './allblog.css'

function AllBlog() {

    const [allBlogs, setAllBlogs] = useState()

    async function viewAllBlog() {
        let res = await axios.get(allBlogapi)
        console.log(res);
        setAllBlogs(res.data.allBlog)
    }

    useEffect(() => { viewAllBlog() }, [])


    return (
        <div className='allblogs'>
            {allBlogs && allBlogs.map((r) => {
                return (
                    <SingleBlog singleblog={r} />
                )
            })}
        </div>
    )
}

export default AllBlog