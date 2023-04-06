import './signup.css'
import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { signup } from '../Api/api'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import NavBar from './NavBar'


function SignUp() {

    const navigate = useNavigate()

    const usersignname = useRef()
    const usersignemail = useRef()
    const usersignpassword = useRef()
    const userphonenumber = useRef()


    async function submit() {
        let user = {
            user_name: usersignname.current.value,
            email: usersignemail.current.value,
            password: usersignpassword.current.value,
            phonenumber: userphonenumber.current.value
        }

        const res = await axios.post(signup, user)
        console.log(res);
        if (res.data.sucess == true) {
            navigate("/login")
        } else {
            alert(res.data.message)
        }
    }

    function login() {
        navigate("/login")
    }

    function back() {
        navigate('/')
    }

    return (
        <div>
            <div className='navbarsignup'>
                <ArrowBackIosIcon className='arrowback signuparrow' onClick={back} />
                <NavBar />
            </div>
            <div className='sign'>
                <div className='signinhead'>
                    <h1 className='signhead'>Sign Up</h1>
                </div>
                <TextField id="standard-basic" label="Username" className='username' variant="standard" inputRef={usersignname} />
                <TextField id="standard-basic" label="Email" className='email' variant="standard" inputRef={usersignemail} />
                <TextField id="standard-basic" label="Password" className='password' variant="standard" inputRef={usersignpassword} />
                <TextField id="standard-basic" label="Phone Number" className='phnnumber' variant="standard" inputRef={userphonenumber} />
                <div className='btnsignin'>
                    <Button variant="contained" onClick={submit}>Submit</Button>
                    <Button variant="contained" className='loginbtn' onClick={login}>Login</Button>
                </div>
            </div>
        </div>
    )
}

export default SignUp