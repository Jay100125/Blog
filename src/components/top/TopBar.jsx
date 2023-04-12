import React from 'react'
import "./topbar.css"

export default function TopBar() {
  return (
    <div className='top'>
      <div className="topLeft">
        <i className="topIcons fa-brands fa-square-facebook"></i>
        <i className="topIcons fa-brands fa-square-instagram"></i>
        <i className="topIcons fa-brands fa-square-twitter"></i>
        <i className="topIcons fa-brands fa-square-snapchat"></i>
      </div>
      <div className="topCentre">
        <ul className="topList">
          <li className="topList-item">HOME</li>
          <li className="topList-item">WRITE</li>
          <li className="topList-item">ABOUT</li>
          <li className="topList-item">CONTACT</li>
          <li className="topList-item">LOG OUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img
        className = "topImage" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVOcpxzUHn4Kv7MVaMyeWhF3vwgZUzOI02VQ&usqp=CAU" alt="" />
      <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>

    </div>
  )
  
}
