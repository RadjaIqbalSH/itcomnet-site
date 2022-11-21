import React, { useEffect, useState } from 'react'
import { Link } from "gatsby"
import { HiChevronDown, HiChevronLeft } from "react-icons/hi";
import { StaticImage } from "gatsby-plugin-image"
import { globalHistory } from "@reach/router"
import { TfiMenu } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";

const pathList = {
  home: '/',
  aboutUs: '/about-us/',
  layananInternet: '/product-and-service/layanan-internet/',
  wireless: '/product-and-service/layanan-internet/wireless/',
  fiberOptic: '/product-and-service/layanan-internet/fiber-optic/',
  vsat: '/product-and-service/layanan-internet/vsat/',
  bundlingPackage: '/product-and-service/bundling-package/',
  services: '/product-and-service/services',
  cloud: '/product-and-service/services/cloud/',
  manage: '/product-and-service/services/manage/',
  contactUs: '/contact-us/',
}

const NavBar = () => {
  const path = globalHistory.location.pathname

  const [isActive, setIsActive] = useState(false)
  const [isLayanan, setIsLayanan] = useState(false)
  const [isService, setIsService] = useState(false)
  const [isScrollDown, setIsScrollDown] = useState(false)

  const handleMenu = () => {
    setIsActive(!isActive)
  }

  useEffect(()=>{
    window.onscroll = function() {
      if(window.pageYOffset > 50) {
        setIsScrollDown(true)
      } else {
        setIsScrollDown(false)
      }
    };

    return(()=>window.onscroll = null)
  })

  return (
    <>
      <div className={[isScrollDown ? 'bg-white shadow' : '', "w-full fixed top-0 transition-all duration-600"].join(' ')}>
        <div id='navbar' className='hidden mx-auto max-w-[1044px] w-auto lg:flex items-center justify-center space-x-8 h-[90px]'>
          <Link className='flex' to="/">
            <StaticImage class='w-16' src="../images/logo.png" alt="Logo" />
            <p className='font-semibold ml-2'>ITCOMNet</p>
          </Link>
          <Link className={['hover:text-orange-400', pathList.home === path ? 'text-orange-400' : 'text-black'].join(' ')} to="/">Home</Link>
          <Link className={['hover:text-orange-400', pathList.aboutUs === path ? 'text-orange-400' : 'text-black'].join(' ')} to="/about-us">About Us</Link>
          <div className='dropdown h-full'>
            <div className={['hover:text-orange-400', path.includes(pathList.layananInternet) ? 'text-orange-400' : 'text-black', 'cursor-pointer', 'flex items-center space-x-2 h-full'].join(' ')}>
              <p >Layanan Internet</p>
              <HiChevronDown/>
            </div>
            <div className="dropdown-content w-[160px] bg-white shadow-xl rounded-lg transition-all">
              <Link className={['hover:text-orange-400', 'px-6 pt-6', pathList.wireless === path ? 'text-orange-400' : 'text-black'].join(' ')} to="/product-and-service/layanan-internet/wireless">Wireless</Link>
              <Link className={['hover:text-orange-400', 'px-6 py-4', pathList.fiberOptic === path ? 'text-orange-400' : 'text-black'].join(' ')} to="/product-and-service/layanan-internet/fiber-optic">Fiber Optic</Link>
              <Link className={['hover:text-orange-400', 'px-6 pb-6', pathList.vsat === path ? 'text-orange-400' : 'text-black'].join(' ')} to="/product-and-service/layanan-internet/vsat">VSAT</Link>
            </div>
          </div>
          <Link className={['hover:text-orange-400', pathList.bundlingPackage === path ? 'text-orange-400' : 'text-black'].join(' ')} to="/product-and-service/bundling-package">Bundling Package</Link>
          <div className='dropdown h-full'>
            <div className={['hover:text-orange-400', path.includes(pathList.services) ? 'text-orange-400' : 'text-black', 'cursor-pointer', 'flex items-center space-x-2 h-full'].join(' ')}>
              <p>Services</p>
              <HiChevronDown/>
            </div>
            <div className="dropdown-content w-[300px] bg-white shadow-xl rounded-lg transition-all">
              <Link className={['hover:text-orange-400', pathList.cloud === path ? 'text-orange-400' : 'text-black', 'px-6 pt-6'].join(' ')} to="/product-and-service/services/cloud">Cloud Services (Web hosting, VPS, mailhosting, domain)</Link>
              <Link className={['hover:text-orange-400', pathList.manage === path ? 'text-orange-400' : 'text-black', 'px-6 pt-4 pb-6'].join(' ')} to="/product-and-service/services/manage">Manage Service (Access Point, IoT, CCTV)</Link>
            </div>
          </div>
          <Link className={['hover:text-orange-400', pathList.contactUs === path ? 'text-orange-400' : 'text-black'].join(' ')} to="/contact-us">Contact Us</Link>
        </div>
        
        <style>{`
          /* Style The Dropdown Button */
          /* The container <div> - needed to position the dropdown content */
          .dropdown {
            position: relative;
            display: inline-block;
          }
          
          .dropdown-child {
            position: relative;
            display: inline-block;
          }
          
          /* Dropdown Content (Hidden by Default) */
          .dropdown-content {
            display: none;
            position: absolute;
            z-index: 1;
          }
          
          /* Links inside the dropdown */
          .dropdown-content a {
            text-decoration: none;
            display: block;
          }
          
          /* Show the dropdown menu on hover */
          .dropdown:hover .dropdown-content {
            display: block;
          }
          
          .dropdown-child:hover .dropdown-child-content {
            display: block;
          }
        `}</style>
      </div>
      <div className='relative'>
        <div className='fixed lg:hidden top-0 w-full h-16 px-8 bg-white shadow-lg flex items-center justify-between z-10'>
          <TfiMenu className='text-xl' onClick={handleMenu}/>
          <Link className='flex' to="/">
            <StaticImage class='w-8' src="../images/logo.png" alt="Logo" />
            <p className='font-semibold text-[8px] ml-1'>ITCOMNet</p>
          </Link>
        </div>
        <div className={['fixed w-full h-[100vh] bg-white z-20 top-0 transition-all duration-300', isActive ? 'left-0' : '-left-full'].join(' ')}>
          <div className='flex justify-between items-center shadow p-8'>
            <Link to="/">
              <StaticImage class='w-10' src="../images/logo.png" alt="Logo" />
            </Link>
            <IoMdClose className='text-3xl' onClick={handleMenu}/>
          </div>
          <div className='px-8 mt-4 flex flex-col'>
            <Link className={['border-b-2 py-4', pathList.home === path ? 'text-orange-400 text-lg' : 'text-black'].join(' ')} to="/">Home</Link>
            <Link className={['border-b-2 py-4', pathList.aboutUs === path ? 'text-orange-400 text-lg' : 'text-black'].join(' ')} to="/about-us">About Us</Link>
            <div className={[  path.includes(pathList.layananInternet) ? 'text-orange-400 text-lg' : 'text-black', 'flex justify-between items-center border-b-2 py-4 w-full'].join(' ')} onClick={()=> setIsLayanan(!isLayanan)}>
              <p >Layanan Internet</p>
              <HiChevronLeft className={['transition-all',isLayanan ? '-rotate-90' : 'rotate-0'].join(' ')}/>
            </div>
            <div className={['flex flex-col bg-gray-100 overflow-hidden transition-all', isLayanan ? 'h-[150px]' : 'h-0'].join(' ')}>
              <Link className={['hover:text-orange-400', 'px-6 pt-6', pathList.wireless === path ? 'text-orange-400' : 'text-black'].join(' ')} to="/product-and-service/layanan-internet/wireless">Wireless</Link>
              <Link className={['hover:text-orange-400', 'px-6 py-4', pathList.fiberOptic === path ? 'text-orange-400' : 'text-black'].join(' ')} to="/product-and-service/layanan-internet/fiber-optic">Fiber Optic</Link>
              <Link className={['hover:text-orange-400', 'px-6 pb-6', pathList.vsat === path ? 'text-orange-400' : 'text-black'].join(' ')} to="/product-and-service/layanan-internet/vsat">VSAT</Link>
            </div>
            <Link className={['border-b-2 py-4 hover:text-orange-400', pathList.bundlingPackage === path ? 'text-orange-400' : 'text-black'].join(' ')} to="/product-and-service/bundling-package">Bundling Package</Link>
            <div className={[ path.includes(pathList.services) ? 'text-orange-400 text-lg' : 'text-black', 'flex justify-between items-center border-b-2 py-4 w-full'].join(' ')} onClick={()=> setIsService(!isService)}>
              <p >Services</p>
              <HiChevronLeft className={['transition-all',isService ? '-rotate-90' : 'rotate-0'].join(' ')}/>
            </div>
            <div className={['flex flex-col bg-gray-100 overflow-hidden transition-all', isService ? 'min-h-[117px]' : 'h-0'].join(' ')}>
              <Link className={['hover:text-orange-400', 'px-6 pt-6', pathList.cloud === path ? 'text-orange-400' : 'text-black', 'px-6 pt-6'].join(' ')} to="/product-and-service/services/cloud">Cloud Services (Web hosting, VPS, mailhosting, domain)</Link>
              <Link className={['hover:text-orange-400', 'px-6 pt-4 pb-6', pathList.manage === path ? 'text-orange-400' : 'text-black', 'px-6 pt-4 pb-6'].join(' ')} to="/product-and-service/services/manage">Manage Service (Access Point, IoT, CCTV)</Link>
            </div>
            <Link className={['border-b-2 py-4 hover:text-orange-400', pathList.contactUs === path ? 'text-orange-400' : 'text-black'].join(' ')} to="/contact-us">Contact Us</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar