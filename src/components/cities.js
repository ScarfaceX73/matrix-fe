import React, { useState } from 'react';
import "./city.css";
import sun from '../img/sunnyBox.png';
import thunder from '../img/thunderBox.png';
import cloud from '../img/cloudBox.png';
import globe from '../img/earth.png'

const Cities = ({ data }) => {
    // const URL_SINGLE = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=chennai&days=1&aqi=no&alerts=yes`
    return (
        <div id='cities'>
            <div className='city-info'>
                <div>
                    <h1>Cities</h1>
                    <div className='weather-cards'>
                        <div className='thunder-box'>
                            <h3>Thunder</h3>
                            <div className='mar-up'>
                                <h1>24</h1><span>°</span>
                                <div >
                                    <div className='city-dt'>
                                        <h3>Mumbai</h3>
                                        <p>09/03/23</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='cloud-box'>
                            <h3>Cloudy</h3>
                            <div className='mar-up'>
                                <h1>31</h1><span>°</span>
                                <div>
                                    <div className='city-dt'>
                                        <h3>chennai</h3>
                                        <p>09/03/23</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='sun-box'>
                            <h3>Sunny</h3>
                            <div className='mar-up'>
                                <h1>40</h1><span>°</span>
                                <div>
                                    <div className='city-dt'>
                                        <h3>Delhi</h3>
                                        <p>09/03/23</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* {data.map((item) => {
                        return (
                                <div className='thunder-box' key={item.custom_id} onMouseEnter={() => { setHovered(item.custom_id) }} onMouseLeave={() => { setHovered(undefined) }}>
                                    <h3>Thunder</h3>
                                    <div className='mar-up'>
                                        <img className='project-thumb' src={item.img} style={{ opacity: hovered === item.custom_id ? 0.2 : 1 }} />
                                        {hovered === item.custom_id && <div className="info-div" style={{ position: "absolute" }}></div>}
                                    </div>
                                </div>
                        )
                    })} */}
                    <div className='inp-div'>
                        <input type='text' placeholder='Search City' />
                    </div>
                </div>
            </div>
            <div className='globe'>
                <img src={globe} />
            </div>
        </div>
    )
}

export default Cities