import React from 'react'
import NavBar from './NavBar'
import AllBlog from './AllBlog'
import FooterComponent from './FooterComponent'

function HomePage() {
  return (
    <div>
         <div className='navbarall'>
               <NavBar/>
            </div>
            <img src="https://wallpaperforu.com/wp-content/uploads/2020/10/food-wallpaper-20100313193312-2048x1365.jpg" alt=""  className='imgmain'/>
        <AllBlog/>
        <FooterComponent/>
    </div>
  )
}

export default HomePage