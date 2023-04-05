import React from 'react'
import './singleuserblog.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { deleteSingleBlog, editBlogapi } from '../Api/api';
import { useNavigate } from 'react-router-dom';



function SingleUserBlog({ Blog }) {

  const navigate = useNavigate()

  async function deleteOne() {
    let deleteOneBlog = await axios.delete(deleteSingleBlog + Blog._id)
    window.location.replace("http://localhost:5173/singleuserblog")
    // console.log("deleted blog", deleteOneBlog);
  }


  async function editBlog() {
    let editOneBlog = await axios.patch(editBlogapi + Blog._id)
    console.log("edited blog", editOneBlog);
    navigate('/editblog', { state: Blog })
  }


  return (
    <div className='userblog'>
      <div className='singleparaid'>
        <p className='singlepara2'>{Blog.author_name}</p>
        <p className='singlepara4'>{Blog.date_posted}</p>
      </div>
      <hr  className='hr1'/>
      <p className='singlepara5'>{Blog.blog_title}</p>
      <p className='singlepara1'>{Blog.blog_descrip}</p>
      <hr className='hr2'/>
      <DeleteIcon onClick={deleteOne} className='deleteicon' />
      <EditIcon className='editicon' onClick={editBlog} />
    </div>
  )
}

export default SingleUserBlog