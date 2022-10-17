import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import axios from "axios"

const Home = () => {


  const location = useLocation();
  console.log(location);
  const [posts, setPosts] =  useState([]);
  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`)
        setPosts(res.data)
        console.log(posts.img, "이미지")
        console.log(res, "홈")
      } catch(err) {
        console.log(err)
      }
    }
    fetchData();
  }, [cat])


  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className='post' key={post.id}>
            <div className='img'>
              <img src={`http://localhost:3000/upload/${post.img}`} alt="" />
            </div>
            <div className='content'>
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
                <p>{getText(post.desc)}</p>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home