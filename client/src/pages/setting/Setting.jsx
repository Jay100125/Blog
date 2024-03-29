import './setting.css'
import Sidebar from '../../components/sidebar/Sidebar'
import { useContext, useState } from 'react'
import { Context } from '../../context/Context'
import axios from 'axios'

export default function Setting() {
  const [file, setFile] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [success, setSuccess] = useState(false)

  const { user, dispatch } = useContext(Context)
  const PF = "http://localhost:8800/images/"

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({ type: 'UPDATE_START' })
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    }
    if (file) {
      const data = new FormData()
      const filename = Date.now() + file.name
      data.append('name', filename)
      data.append('file', file)
      updatedUser.profilePic = filename
      try {
        await axios.post('/upload', data)
      } catch (err) {}
    }
    try {
      const res = await axios.put('/users/' + user._id, updatedUser)
      setSuccess(true)
      dispatch({ type: 'UPDATE_SUCCESS', payload: res.data })
    } catch (error) {
      dispatch({ type: 'UPDATE_FAILURE' })
    }
  }

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : PF +  user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{' '}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: 'none' }}
              onChange={(e) => setFile(e.target.files[0])}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: 'green', textAlign: 'center', marginTop: '20px' }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
