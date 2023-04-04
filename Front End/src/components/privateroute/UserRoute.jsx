import React from 'react'
import { UserContext } from '../Usercontext/UserContext'
import { useContext } from 'react'
import Login from '../Login'

function UserRoute({ children }) {

    const { loggedInUser } = useContext(UserContext)

    return (
        <>
            {
                loggedInUser ? children : <Login />
            }
        </>
    )
}

export default UserRoute