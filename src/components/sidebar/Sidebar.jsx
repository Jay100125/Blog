import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebatTitle">ABOUT ME</span>
            <img src="https://wallpapers-clan.com/wp-content/uploads/2023/02/beach-house-bali-aesthetic-anime-wallpaper.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione minus sint dicta ipsam! Voluptas quia at odit nam quo, exercitationem tenetur maxime autem dignissimos veniam, quaerat cumque facilis, atque voluptate!</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Cinema</li>
                <li className="sidebarListItem">Tech</li>

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
