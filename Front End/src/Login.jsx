import { Button, OutlinedInput } from '@mui/material'
import axios from 'axios'
import React, { useRef } from 'react'
import './login.css'

function Login() {

    const useremailref = useRef()
    const userpassref = useRef()

    async function Login() {
        const user = {
            useremail: useremailref.current.value,
            userpassword: userpassref.current.value
        }
        const res = await axios.post("http://localhost:5000/login", user)
        console.log(res)
        if (res.data.success == true) {
            alert(res.data.message)
        } else {
            alert(res.data.message)
        }
    }

    return (
        <div className='login'>
            <h1>LogIn</h1>
            <h3 className='unlogin'>User Email</h3>
            <OutlinedInput placeholder='Enter Email' inputRef={useremailref} />
            <h3 className='passlogin'>Password</h3>
            <OutlinedInput placeholder='Enter your Password' inputRef={userpassref} /><br />
            <Button variant="contained" className='btnlogin' onClick={Login}>Submit</Button>
        </div>
    )
}

export default Login