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
                <h2>{allBlog&&allBlog[0].author_name}</h2>
            </div>
            {allBlog && allBlog.map((e) => {
                return (
                    <div>
                        <div>
                            <h5>{e.blog_title}</h5>
                            <p>{e.blog_descrip}</p>
                            <p>{e.category}</p>
                            <p>{e.date_posted}</p>
                        </div>
                    </div>


                )
            })}

        </>

    )
}
export default SingleUserAllBlog