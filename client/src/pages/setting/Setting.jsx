import "./setting.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Setting() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVOcpxzUHn4Kv7MVaMyeWhF3vwgZUzOI02VQ&usqp=CAU"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Jay" name="name" />
          <br />
          <label>Email</label>
          <input type="email" placeholder="jay@gmail.com" name="email" />
          <br />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <br />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
