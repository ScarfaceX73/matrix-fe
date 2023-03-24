import React, { useState } from "react";
import "./city.css";
import { FiSearch } from "react-icons/fi";
import axios from "axios";

const Cities = ({ data, cityInView }) => {
  const [search, setSearch] = useState("");
  const [singleData, setSingleData] = useState([]);
  const [zoom, setZoom] = useState(false);

  const res = async (city) => {
    const response = await axios.get(
      String(process.env.REACT_APP_BACKEND_SINGLE),
      {
        params: {
          city: city === "" ? "chennai" : city,
        },
      }
    );
    return response?.data ?? [];
  };

  const handleSearch = async () => {
    const weatherInfo = await res(search);
    setSingleData(weatherInfo);
    setZoom(true);
    setSearch("");
  };

  const Card = (props) => {
    const { cardData, cardClass, delay = 0 } = props;
    return (
      <div
        className={cardClass}
        style={{
          opacity: 0,
          animationDelay: delay,
          animationName: "slidein",
          animationDuration: "1s",
          animationFillMode: "forwards",
        }}
      >
        <h3>{cardData?.query?.current?.condition?.text}</h3>
        <div className="mar-up">
          <h1>{cardData?.query?.current?.temp_c}</h1>
          <span>°</span>
          <div>
            <div className="city-dt">
              <h3>{cardData?.query?.location?.name}</h3>
              <p>{cardData?.query?.forecast.forecastday[0].date}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="cities">
      <div style={{ width: "100%", padding: "100px", textAlign: "center" }}>
        <h1>Cities</h1>
      </div>
      <div className="city-info">
        <div>
          {cityInView ? (
            <div className="weather-cards">
              <Card cardData={data[0]} cardClass="thunder-box card" />
              <Card
                cardData={data[1]}
                cardClass="cloud-box card"
                delay={"0.3s"}
              />
              <Card
                cardData={data[2]}
                cardClass="sun-box card"
                delay={"0.6s"}
              />
            </div>
          ) : (
            <div style={{ height: "436px" }}></div>
          )}
          <div className="inp-div">
            <input
              type="text"
              placeholder="Search City"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button className="inp-btn" onClick={handleSearch}>
              <FiSearch />
            </button>
          </div>
        </div>
      </div>
      <div
        className="globe"
        style={{ backgroundSize: zoom === true ? "cover" : "none" }}
      >
        <div className="grid">
          <div>
            <h1>{singleData?.current?.temp_c}</h1>
            <span>°</span>
            <p>{singleData?.location?.name}</p>
          </div>
          <div>
            <h1>{singleData?.current?.temp_c}</h1>
            <span>°</span>
            <p>{singleData?.location?.name}</p>
          </div>
          <div>
            <h1>{singleData?.current?.temp_c}</h1>
            <span>°</span>
            <p>{singleData?.location?.name}</p>
          </div>
          <div>
            <h1>{singleData?.current?.temp_c}</h1>
            <span>°</span>
            <p>{singleData?.location?.name}</p>
          </div>
          <div>
            <h1>{singleData?.current?.temp_c}</h1>
            <span>°</span>
            <p>{singleData?.location?.name}</p>
          </div>
          <div>
            <h1>{singleData?.current?.temp_c}</h1>
            <span>°</span>
            <p>{singleData?.location?.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cities;
