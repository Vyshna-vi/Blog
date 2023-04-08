import React, { useEffect, useState } from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import { useLocation } from 'react-router-dom';
import { selectCategory } from '../../Api/api';
import '../allblog/allblog.css'

import axios from 'axios';



function ViewOneCategory() {

    const location = useLocation()

    const [categories, setCategories] = useState([])

    async function getCAtegoryBlogs() {
        console.log(location.state);
        let response = await axios.get(selectCategory + location.state)
        setCategories(response.data.selectOneCategory)

    }
    useEffect(() => {
        getCAtegoryBlogs()
        console.log(categories)
    }, [])

    function back() {
        navigate('/')
    }

    return (
        <>
            {
                categories.map((c) => {
                    return (
                        <div className="card">
                            <div className='cardupperr'>
                                <p className='coma'>{c.author_name}</p>
                                <p className='dateview'>{c.date_posted}</p>
                                <p className='comc'>{c.category}</p>
                            </div>
                            <hr className='hr3' />
                            <div className='bottom'>
                                <p className='heada'>{c.blog_title}</p>
                                <p className='paradesc'>{c.blog_descrip}</p>
                            </div >
                            <div className='likeiconss'>
                                <ThumbUpOffAltIcon className='thumbicon' />
                                <ThumbDownOffAltIcon className='thumbicon' />
                                <CommentIcon className='thumbicon' />
                            </div>
                        </div >
                    )
                })
            }
        </>
    )
}

export default ViewOneCategory