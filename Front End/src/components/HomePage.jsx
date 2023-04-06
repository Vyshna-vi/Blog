import React from 'react'
import NavBar from './NavBar'
import AllBlog from './AllBlog'

function HomePage() {
  return (
    <div>
         <div className='navbarall'>
               <NavBar/>
            </div>
        <AllBlog/>
    </div>
  )
}

export default HomePage