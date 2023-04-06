import { Button, OutlinedInput } from '@mui/material'
import axios from 'axios'
import React, { useRef, useContext } from 'react'
import './login.css'
import { UserContext } from './Usercontext/UserContext'
import { useNavigate } from 'react-router-dom'
import { loginapi } from '../Api/api'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import NavBar from './NavBar'


function Login() {

    const useremailref = useRef()
    const userpassref = useRef()
    const navigate = useNavigate()

    const { setLoggedInUser } = useContext(UserContext)

    async function login() {
        const user = {
            useremail: useremailref.current.value,
            userpassword: userpassref.current.value
        }
        const res = await axios.post(loginapi, user)
        console.log(res)
        if (res.data.success == true) {
            setLoggedInUser(res.data.user)
            // alert(res.data.message)
            localStorage.setItem("loggedinuser", JSON.stringify(res.data.user))
            navigate('/singleuserblog')

        } else {
            alert(res.data.message)
        }
    }

    function back() {
        navigate('/signup')
    }

    return (
        <div className="nav">
            <div className='navbarsignup'>
                <ArrowBackIosIcon className='arrowback loginarrow' onClick={back} />
                <NavBar />
            </div>
            <div className='loginelement'>
                <div className='login'>
                    <h1 className='loginhead'>LogIn</h1>
                </div>
                <h3 className='userlogin'>User Email</h3>
                <OutlinedInput placeholder='Enter Email' inputRef={useremailref} />
                <h3 className='passlogin'>Password</h3>
                <OutlinedInput placeholder='Enter your Password' inputRef={userpassref} /><br />
                <button className='btnlogin' onClick={login}>Submit</button>
            </div>
        </div>
    )
}

export default Login