import React from 'react';
import './Header.scss';
import { BiMap } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { BsTelephone } from 'react-icons/bs'
import Navbar from './Navbar';


const Header = () => {
  return (
    <div>
      <div className="header-container">
        <div className="header-row">
          <div className="header-nav"><span className='phone-icon'><BsTelephone /></span>(571) 316-0676</div>
          <div className='line'></div>
          <div className="header-nav"><BiMap size={10} /><span>1751 Pinnacle Dr #600d, McLean, VA 22102</span></div>
          <div className='line'></div>
          <div className="header-nav">
            <div className="input-grp">

              <input type="search" id="form1" placeholder="Search" className='input-form ' />

              <AiOutlineSearch size={20} className='search-btn' />
            </div>
            <button className='btn-nav'>Review Your Routes</button>
          </div>
        </div>
        <div className="row">
        </div>
      </div>
      <Navbar />
    </div>
  )
}

export default Header
