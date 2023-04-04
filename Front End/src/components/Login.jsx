import { Button, OutlinedInput } from '@mui/material'
import axios from 'axios'
import React, { useRef, useContext } from 'react'
import './login.css'
import { UserContext } from './Usercontext/UserContext'
import { useNavigate } from 'react-router-dom'
import { loginapi } from '../Api/api'

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
            navigate('/addblog')
        } else {
            alert(res.data.message)
        }
    }

    return (
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
    )
}

export default Login