import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import {CgShoppingBag} from 'react-icons/cg'
import {GoThreeBars} from 'react-icons/go'

const Header = () => {
  const [showbars , setshowbars]=useState(true)
  const toggleMenu=()=>{
    setshowbars((showbars)=>!showbars)
  }
  return (
    <div className='container'>
      <div className="logo">
        <img src={Logo} alt="" srcset="" />
        <span>Amazon</span>
      </div>
      <div className="Right">
      <div className="Bars" onClick={toggleMenu}>
        <GoThreeBars />
      </div>
        <div className="menu" style={{display :showbars? 'inherit':'none'}}>
            <ul className='menus'>
                <li> Collections</li>
                <li>Brands</li>
                <li>News</li>
                <li>Sales</li>
                <li>ENG</li>
            </ul>
        </div>
        <input type="text"  className='search' placeholder='Search'/>
        <CgShoppingBag className='card'/>
      </div>
    </div>
  )
}

export default Header
