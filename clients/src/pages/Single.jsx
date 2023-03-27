import React from 'react'
import { Link } from 'react-router-dom';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import Menu from '../components/Menu';

const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className='user'>
          <img src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=3" alt="" />
          <div className='info'>
            <span>Veasna</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className='edit'>
            <Link to={`/write?/edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, eligendi!
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum error voluptatem asperiores quam tempore corporis porro doloremque architecto possimus beatae.</p>
        </p>
         
      </div>
     <Menu/>
    </div>
  )
}

export default Single