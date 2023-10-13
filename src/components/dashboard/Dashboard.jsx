import React from 'react';
import './Dashboard.scss';
const Dashboard = () => {
  return (
    <div id="carouselExample" className="carousel slide">
    <div className="carousel-inner">
      <div className="carousel-item active">
        {/* <img src={require('../../images/img3.png')}  className="d-block w-100" alt="img3"/> */}
        <div className="row-carousal">
            <div className="col-6">              
                <div className='row-div'>
                <h1>Key Performance Indicators in Waste Collection Route Optimization</h1>
                <p>ROC shares metrics, best practices and standards based on decades of garbage truck routing experience.</p>
                <button className='dash-btn'>READ MORE</button>
                </div>
            </div>
            <div className="col-6-2"><img src={require('../../images/dashboard2.png')} alt="img is not availble"/></div>
        </div>
      </div>
      <div className="carousel-item">
        <img src={require('../../images/img2.png')}  className="d-block w-100" alt="img2"/>
      </div>
      <div className="carousel-item">
        <img src={require('../../images/img1.png')}  className="d-block w-100" alt="img1"/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Dashboard;