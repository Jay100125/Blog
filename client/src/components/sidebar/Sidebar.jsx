import { useEffect, useState } from 'react'
import './sidebar.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  const [cats, setCats] = useState([])

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get('/categories')
      setCats(res.data)
    }
    getCats()
  }, [])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebatTitle">ABOUT ME</span>
        <img
          src="https://wallpapers-clan.com/wp-content/uploads/2023/02/beach-house-bali-aesthetic-anime-wallpaper.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
          minus sint dicta ipsam! Voluptas quia at odit nam quo, exercitationem
          tenetur maxime autem dignissimos veniam, quaerat cumque facilis, atque
          voluptate!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className='link'>
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CONTACT</span>
        <div className="sidebarSocial">
          <i className="sidebarIcons fa-brands fa-square-facebook"></i>
          <i className="sidebarIcons fa-brands fa-square-instagram"></i>
          <i className="sidebarIcons fa-brands fa-square-twitter"></i>
          <i className="sidebarIcons fa-brands fa-square-snapchat"></i>
        </div>
      </div>
    </div>
  )
}
