import React from 'react';
import './Navbar.scss';
import { RiArrowDownSLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className="col-3"><img src={require('../../images/logo.png')} alt="dashboard is not availble" />
      </div>
      <div className="col-9">
        <ul className='nav-items'>
          <li >Routing Software and Services
            <div className='dropdown'><RiArrowDownSLine /></div>
          </li>
          <li>Snow Plow Routing <div className='dropdown'><RiArrowDownSLine /></div></li>
          <li>Waste Collection Routing Software <div className='dropdown'><RiArrowDownSLine /></div></li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;