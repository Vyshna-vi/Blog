import React, { useEffect, useState } from 'react'
import SingleUserBlog from './SingleUserBlog'
import { UserContext } from './Usercontext/UserContext';
import { useContext } from 'react';
import { singleUserBlog } from '../Api/api';
import axios from 'axios';

function UserMain() {

    const [singleUserBlogs, setSingleUserBlogs] = useState()
    const { loggedInUser } = useContext(UserContext)
    async function fetchuserblogs() {
        let singleBlog = await axios.get(singleUserBlog + loggedInUser._id)
        console.log(singleBlog);
        setSingleUserBlogs(singleBlog.data.singleBlog)
    }
    useEffect(() => { fetchuserblogs() })

    return (
        <div>
            {singleUserBlogs && singleUserBlogs.map((b) => {
                return (
                    <SingleUserBlog singleuserBlog={b} />
                )
            })}
        </div>
    )
}

export default UserMain