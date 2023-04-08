import { Button, OutlinedInput, TextareaAutosize } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { editBlogapi } from '../../Api/api'
import axios from 'axios'
import '../allblog/allblog.css'

function EditOneBlog() {

  const navigate = useNavigate()

  const [blogName, setBlogName] = useState()
  const [blogDescription, setBlogDescription] = useState()
  const [blogcategory, setCategory] = useState()

  const location = useLocation()

  useEffect(() => {
    setBlogName(location.state.blog_title)
    setBlogDescription(location.state.blog_descrip)
    setCategory(location.state.category)
  }, [])

  async function submit() {
    let blog = {
      blog_title: blogName,
      blog_descrip: blogDescription,
      category:blogcategory
    }
    const res = await axios.patch(editBlogapi + location.state._id, blog)
    console.log(res);
    navigate('/singleuserblog')

  }



  function ViewAllBlog() {
    navigate("/singleuserblog")
  }


  return (
    <div className='editpage shadow'>
      <h1 className='hcom heading'>Edit Blog</h1>
      <h3 className='blogname'>Blog Title</h3>
      <OutlinedInput className='outlinedit' placeholder="Enter Blog Title" value={blogName} onChange={(e) => {
        setBlogName(e.target.value)
        // console.log(e.target.value)
      }} />
      <h3 className='blogdescrip'>Blog Description</h3>
      <TextareaAutosize className='textedit' aria-label="empty textarea" minRows={4} placeholder="Blog Description" style={{ width: 550, height: 80 }} value={blogDescription} onChange={(e) => setBlogDescription(e.target.value)} /><br />
      <label for="category" className='labelcat1'>Category:</label>
      <select name="category" className="categories1" value={blogcategory} onChange={(e)=>{setCategory(e.target.value)}}>
        <option value="React">React</option>
        <option value="Express">Express</option>
        <option value="MongoDB">MongoDB</option>
        <option value="HTML-CSS">HTML-CSS</option>
      </select>
      <div className='btnsedit'>
        <Button variant="outlined" className='addblogbtn' onClick={submit} >Edit Task</Button>
        <Button variant="outlined" className='allblogbtn' onClick={ViewAllBlog}>Back</Button>
      </div>
    </div>
  )
}

export default EditOneBlog