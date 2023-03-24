import React, { useEffect, useState } from 'react';
import "./city.css";
import sun from '../img/sunnyBox.png';
import thunder from '../img/thunderBox.png';
import cloud from '../img/cloudBox.png';
import globe from '../img/earth.png'
import { FiSearch } from 'react-icons/fi';
import axios from 'axios';

const Cities = ({ data }) => {
    const [search, setSearch] = useState('');
    const [singleData, setSingleData] = useState([]);
    const [zoom, setZoom] = useState(false);

    const res = async (city) => {
        const response = await axios.get(String(process.env.REACT_APP_BACKEND_SINGLE), {
            params: {
                city: city === '' ? "chennai" : city
            }
        })
        return response?.data ?? [];
    };

    const handleSearch = async () => {
        const weatherInfo = await res(search);
        setSingleData(weatherInfo)
        setZoom(true)
        setSearch('');
    }
    return (
        <div id='cities'>
            <div className='city-info'>
                <div>
                    <h1>Cities</h1>
                    <div className='weather-cards'>
                        <div className='thunder-box card'>
                            <h3>{data[0]?.query?.current?.condition?.text}</h3>
                            <div className='mar-up'>
                                <h1>{data[0]?.query?.current?.temp_c}</h1><span>°</span>
                                <div >
                                    <div className='city-dt'>
                                        <h3>{data[0]?.query?.location?.name}</h3>
                                        <p>{data[0]?.query?.forecast.forecastday[0].date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='cloud-box card'>
                            <h3>{data[1]?.query?.current?.condition?.text}</h3>
                            <div className='mar-up'>
                                <h1>{data[1]?.query?.current?.temp_c}</h1><span>°</span>
                                <div>
                                    <div className='city-dt'>
                                        <h3>{data[1]?.query?.location?.name}</h3>
                                        <p>{data[1]?.query?.forecast.forecastday[0].date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='sun-box card'>
                            <h3>{data[2]?.query?.current?.condition?.text}</h3>
                            <div className='mar-up'>
                                <h1>{data[2]?.query?.current?.temp_c}</h1><span>°</span>
                                <div>
                                    <div className='city-dt'>
                                        <h3>{data[2]?.query?.location?.name}</h3>
                                        <p>{data[2]?.query?.forecast.forecastday[0].date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='inp-div'>
                        <input type='text' placeholder='Search City' onChange={(e) => setSearch(e.target.value)} value={search} />
                        <button className='inp-btn' onClick={handleSearch}><FiSearch /></button>
                    </div>
                </div>
            </div>
            <div className='globe' style={{ backgroundSize: zoom === true ? "cover" : "none" }}>
                <div className='grid'>
                    <div>
                        <h1>{singleData?.current?.temp_c}</h1><span>°</span>
                        <p>{singleData?.location?.name}</p>
                    </div>
                    <div>
                        <h1>{singleData?.current?.temp_c}</h1><span>°</span>
                        <p>{singleData?.location?.name}</p>
                    </div>
                    <div>
                        <h1>{singleData?.current?.temp_c}</h1><span>°</span>
                        <p>{singleData?.location?.name}</p>
                    </div>
                    <div>
                        <h1>{singleData?.current?.temp_c}</h1><span>°</span>
                        <p>{singleData?.location?.name}</p>
                    </div>
                    <div>
                        <h1>{singleData?.current?.temp_c}</h1><span>°</span>
                        <p>{singleData?.location?.name}</p>
                    </div>
                    <div>
                        <h1>{singleData?.current?.temp_c}</h1><span>°</span>
                        <p>{singleData?.location?.name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cities