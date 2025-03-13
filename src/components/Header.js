import React, { useContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Home from './Home'
import AddContext from '../contextApi/AddContext'


function Header() {
  let contextData = useContext(AddContext)
    return (
        <div className='main-container' id={contextData.lightOn?"light-on":null}>
            <header className='header-container'>
                <div className='header-tags'><img style={{filter:contextData.lightOn?"invert(1)":"none"}} src="/images/Logo.png" /><span>ANISH KUMAR SINHA</span></div>
                <div className='link-tags'>
                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to='/about'>About</Link>
                    <Link className='link'>Resume</Link>
                    <Link className='link'>Skills</Link>
                    <Link className='link'>Projects</Link>
                    <Link className='link'>Contact</Link>
                    <button onClick={()=>{contextData.setLightOn((prev)=>!prev)}}><img src={contextData.lightOn?"/images/sun.png":"/images/moon.png"} alt="" /></button>
                    </div>
            </header>
            <Outlet/>
             
   
            <div className='designer-name' id={contextData.lightOn?"border-on":null}>sinhaanishkumar@outlook.com</div>
        </div>
    )
}

export default Header
