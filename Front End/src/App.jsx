import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'
import AddBlog from './components/AddBlog'
import UserProvider from './components/Usercontext/UserContext'
import UserRoute from './components/privateroute/UserRoute'
import AllBlog from './components/AllBlog'
import SingleUserBlog from './components/SingleUserBlog'
import UserMain from './components/UserMain'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path='' element={<SignUp />} />
            <Route path='login' element={<Login />} />
            <Route path='addblog' element={<UserRoute><AddBlog /></UserRoute>} />
            <Route path='allblog' element={<AllBlog />} />
            <Route path='singleuserblog' element={<UserMain />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  )
}

export default App
