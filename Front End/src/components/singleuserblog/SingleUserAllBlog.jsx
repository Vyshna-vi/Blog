import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function SingleUserAllBlog() {

    const location = useLocation()

    const [allBlog, setAllBlogs] = useState()

    console.log("author's all blogs", allBlog)

    useEffect(() => {
        setAllBlogs(location.state)
    })


    return (

        <>
            <div>
                <h2>kgi</h2>
            </div>
            {allBlog && allBlog.map((e) => {
                return (
                    <div>
                        <div>
                            <p>dojdl</p>
                            <p>DatePosted</p>
                            <p>Category</p>
                            <p>Description</p>
                        </div>
                    </div>


                )
            })}

        </>

    )
}
export default SingleUserAllBlog