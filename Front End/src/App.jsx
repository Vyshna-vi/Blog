import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './components/signup/SignUp'
import Login from './components/login/Login'
import AddBlog from './components/addblog and edit/AddBlog'
import UserProvider from './components/Usercontext/UserContext'
import UserRoute from './components/privateroute/UserRoute'
import AllBlog from './components/allblog/AllBlog'
import EditOneBlog from './components/addblog and edit/EditOneBlog'
import NavBar from './components/home/NavBar'
import HomePage from './components/home/HomePage'
import UserMain from './components/singleuserblog/UserMain'
import FooterComponent from './components/home/FooterComponent'
import ViewCategory from './components/viewcategory/ViewCategory'
import SelectBoxComponent from './components/home/SelectBoxComponent'
import ViewOneCategory from './components/viewcategory/ViewOneCategory'
import ViewBlogInDetail from './components/comment/ViewBlogInDetail'
import CommentComponent from './components/comment/CommentComponent'



function App() {

  return (
    <div className="app">
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path='' element={<HomePage />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='allblog' element={<AllBlog />} />
            <Route path='login' element={<Login />} />
            <Route path='addblog' element={<UserRoute><AddBlog /></UserRoute>} />
            <Route path='singleuserblog' element={<UserMain/>} />
            <Route path='editblog' element={<EditOneBlog />} />
            <Route path='navbar' element={<NavBar />} />
            <Route path='footer' element={<FooterComponent />} />
            <Route path='viewbycategory' element={<ViewOneCategory />} />
            <Route path='viewcategory' element={<ViewCategory />} />
            <Route path='selectbox' element={<SelectBoxComponent />} />
            <Route path='viewblogdetails' element={<ViewBlogInDetail />} />
            <Route path='comment' element={<CommentComponent />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  )
}

export default App
