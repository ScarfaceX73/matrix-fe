import React, { useState } from 'react'
import "./news.css";
import sun from '../img/sun.png';
import thunder from '../img/thunder.png';
import cloud from '../img/cloud.png';


const News = ({ data }) => {
    const [hovered, setHovered] = useState(undefined)
    const img = ["thunder", "cloud", "sun"];
    console.log(data);
    return (
        <div id='news'>
            <div className='news-info'>
                <div>
                    <h1>News</h1>
                    <div className='news-cards'>
                        {/* <div className='thunder'>
                            <p>Thunder Strikes Delhi</p>
                        </div>
                        <div className='cloud'>
                            <p>Cloudstorms in chennai</p>
                        </div>
                        <div className='sun'>
                            <p>It's Summer season in Mumbai</p>
                        </div> */}
                        {data.map((item) => {
                            return (
                                <div className={img[item.query.custom_id]} key={item.query.custom_id} onMouseEnter={() => { setHovered(item.custom_id) }} onMouseLeave={() => { setHovered(undefined) }}>
                                    <p>{item?.query?.current?.condition?.text} weather in {item?.query?.location?.name}</p>
                                    {hovered === item.query.custom_id && <div className="info-div" style={{ position: "absolute" }}>
                                        <button className='btn'>Read more</button>
                                    </div>}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='footer'>
                footer
            </div>
        </div>
    )
}

export default News