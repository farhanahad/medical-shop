import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner d-flex  align-items-center'>
            <div className="container ">
                <div className="row">
                    <div className="col-md-10">
                        <h1 className="banner-title" >Take care of your Health Now</h1>
                        <h3 className="sub-title">Sale up to 30% all products</h3>
                        <button className='banner-btn'>Shop Now</button>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;