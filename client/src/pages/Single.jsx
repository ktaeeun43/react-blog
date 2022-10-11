import React, { useContext, useEffect } from 'react'
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import { Link, useLocation } from 'react-router-dom'
import Menu from './Menu'
import { useState } from 'react'
import axios from "axios"
import moment from "moment"
import { AuthContext } from '../context/authContext'

const Single = () => {

  const [post, setPost] =  useState([]);
  const location = useLocation();
  const navigator = useLocation();
  const postId = location.pathname.split("/")[2]

  const {currentUser} = useContext(AuthContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`)
        setPost(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchData();
  }, [postId]);

  const handleDelete = async() => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigator("/")
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='single'>
      <div className='content'>
        <img src={post?.img} alt=""/> 
      <div className='user'>
      {post.userImg && <img src={post.userImg} alt=""/> }
      <div className='info'>
        <span>{post.username}</span>
        <p>Posted {moment(post.date).fromNow()}</p>
        {currentUser.username === post.username && (
        <div className='ed it'>
          <Link to={`/write?edit=2`}>
          <img src={Edit} alt=""/>
          </Link>
          <img onClick={handleDelete} src={Delete} alt=""/>
        </div>
        )}
      </div>
      <h1>{post.title}</h1>
      {post.desc}
      </div>
      </div>
      <Menu />
    </div>
  )
}

export default Single