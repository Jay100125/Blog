/* created home page and inserted same header */
import { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'
import axios, { isCancel, AxiosError } from 'axios'
import { useLocation } from 'react-router-dom'

export default function Home() {
  const [posts, setPosts] = useState([])
  const {search} = useLocation()

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('http://localhost:8800/api/posts' + search)
        setPosts(res.data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchPosts()
  }, [search])

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  )
}
