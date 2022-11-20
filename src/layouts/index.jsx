import React from 'react'
import Footer from './footer'
import Navbar from './nav-bar'

const Layout = ({children}) => {
  return (
    <>
      <div className='relative'>
        <Navbar/>
          {children}
        {/* <Footer/> */}
      </div>
    </>
  )
}

export default Layout;

