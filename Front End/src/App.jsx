import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'
import AddBlog from './components/AddBlog'
import UserProvider from './components/Usercontext/UserContext'
import UserRoute from './components/privateroute/UserRoute'
import AllBlog from './components/AllBlog'
import UserMain from './components/UserMain'
import EditOneBlog from './components/EditOneBlog'


function App() {

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
            <Route path='editblog' element={<EditOneBlog />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  )
}

export default App
