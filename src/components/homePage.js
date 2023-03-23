import React from 'react';
import "./home.css";

const Home = ({ data }) => {
    console.log(data?.query?.current?.cloud);
    return (
        <div className='home' id='home'>
            <div className='topbar'>
                <ul>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#cities'>Cities</a></li>
                    <li><a href='#news'>News</a></li>
                </ul>
            </div>
            <div className='weather_details'>
                <div>
                    <h3>Weather Details</h3>
                    <div className='table'>
                        <table>
                            <tbody>
                                <tr>
                                    <td style={{ paddingRight: "256px" }}>Cloud</td>
                                    <td>{data[0]?.query?.current?.cloud}%</td>
                                </tr>
                                <tr>
                                    <td style={{ paddingRight: "256px" }}>Humidity</td>
                                    <td>{data[0]?.query?.current?.humidity}%</td>
                                </tr>
                                <tr>
                                    <td style={{ paddingRight: "256px" }}>Wind</td>
                                    <td>{data[0]?.query?.current?.wind_kph}km/h</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='temperature'>
                <h1>{data[0]?.query?.current?.temp_c}</h1><span>°</span>
                <div>
                    <div className='info-sm'>
                        <h3>{data[0]?.query?.location?.name}</h3>
                        <span>06.45</span>
                        <span>Thursday</span>
                        <span>09/03/23</span>
                    </div>
                </div>
                <div>
                    <img src={data[0]?.query?.current?.condition?.icon} className='info-icon' />
                </div>
            </div>
        </div>
    )
}

export default Home