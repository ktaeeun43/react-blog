import React from 'react'
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import { Link } from 'react-router-dom'
import Menu from './Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img src='https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/> 
      <div className='user'>
      <img src='https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/> 
      <div className='info'>
        <span>TAEEUN</span>
        <p>Posted 2 days ago</p>
        <div className='edit'>
          <Link to={`/write?edit=2`}>
          <img src={Edit} alt=""/>
          </Link>
          <img src={Delete} alt=""/>
        </div>
      </div>
      <h1>안녕하세욤</h1>
      <p>첫게시물</p>
      </div>
      </div>
      <Menu />
    </div>
  )
}

export default Single