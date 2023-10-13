import React from 'react';
import './Container.scss';

const Container = () => {
    return (
        <div className='content-container'>
            <div className='content-row'>
                <div className='content-col-6'>
                    <div className='content content-bg'><img src={require("../../images/content1.png")} alt="broken img" /></div>
                </div>

                <div className='content-col-6'>
                    <div className="content">
                        <h1>Waste Route Optimization Software Consultants</h1>
                        <p>
                            Route Optimization Consultants evaluates municipal solid waste collection systems, proposes scenarios to maximize efficiency, and implements with new routes and crew buy-in. Our experience covers all types of routing: high density routing (waste collection, postal deliveries, snow plow routing, newspaper deliveries, meter reading), point-to-point routing (collections, deliveries and sales forces with less than 200 stops per route per day), and paired routing (para-transit, armored car and similar). We take pride in our innovations in waste collections and routing. We recently pioneered the development of key performance indicators for waste collection operations. See our new training presentation, Key Performance Indicators in Waste Collections Routing, conducted for the Solid Waste Association of North America, June 23, 2021.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container