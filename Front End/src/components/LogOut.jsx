import React, { useContext } from 'react'
import { UserContext } from './Usercontext/UserContext'
import { Link, useNavigate } from 'react-router-dom';

function LogOut() {

    const { setLoggedInUser } = useContext(UserContext);

    const navigate = useNavigate()

    async function logOut() {
        setLoggedInUser(null);
        localStorage.removeItem("loggedInUser");
        navigate('/')
    }

    return (
        <div>
            <button className='navbtns'>
                <button onClick={logOut} className='navbtns'>Log Out</button>
            </button>
        </div>
    )
}

export default LogOut