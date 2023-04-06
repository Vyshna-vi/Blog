import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './allblog.css'
import { UserContext } from './Usercontext/UserContext'
import LogOut from './LogOut'


function NavBar() {

    const { loggedInUser } = useContext(UserContext)


    return (
        <div className='navbar'>
            <h2 className='nameweb'>BLOG</h2>
            <div className='navsub'>
                <button className='navbtns'><Link className='navbtns' to="/">Home</Link></button>
                <button className='navbtns'><a href="#footer" className='navbtns'>About</a></button>
                <button className='navbtns'><a href="#footer" className='navbtns'>Contact</a></button>
                {loggedInUser && <button className='navbtns'><Link to="/addblog" className='navbtns'>Add Blog</Link></button>}
                {loggedInUser && <button className='navbtns'><Link to="/singleuserblog" className='navbtns'>View Blogs</Link></button>}
                {loggedInUser ? "" : <button className='navbtns'><Link to="/signup" className='navbtns'>Sign Up</Link></button>}
                {loggedInUser ? <LogOut /> : <button className='navbtns'><Link to="/login" className='navbtns'>Log In</Link></button>}
            </div>
        </div>

    )
}

export default NavBar