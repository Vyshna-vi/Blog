import React from 'react'
import './singleuserblog.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { singleUserBlog } from '../Api/api';

function SingleUserBlog({ Blog }) {

async function deleteOne(){
  let deleteOneBlog=await axios.delete(singleUserBlog+Blog._id)
}

  return (
    <div className='userblog'>
      <p>{Blog.blog_title}</p>
      <p>{Blog.blog_descrip}</p>
      <p>{Blog.author_name}</p>
      <p>{Blog.author_id}</p>
      <p>{Blog.date_posted}</p>
      <DeleteIcon  onClick={deleteOne} />
      <EditIcon />
    </div>
  )
}

export default SingleUserBlog