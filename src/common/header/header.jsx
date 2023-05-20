import React from "react"
import logo from "../../common/header/logo.jpg"
import "./header.css"

const Header = () => {
  return (
    <>
        <div className='container'>
          <div className='logo'>
            <img src={logo} alt='' />
          </div>
          <div className='search-box'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
          </div>
        </div>
    </>
  )
}

export default Header;
