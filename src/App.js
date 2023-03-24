import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Home from './components/homePage';
import Cities from './components/cities';
import News from './components/news';

function App() {
  const [data, setData] = useState([])
  const URL_BULK = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=bulk&days=1&aqi=no&alerts=yes`

  const options = {
    method: 'POST',
    url: URL_BULK,
    headers: {
      'content-type': 'application/json',
    },
    data: {
      "locations": [
        {
          "q": "New delhi",
          "custom_id": "0"
        },
        {
          "q": "Chennai",
          "custom_id": "1"
        },
        {
          "q": "Mumbai",
          "custom_id": "2"
        }
      ]
    }
  };
  const res = async () => {
    await axios
      .request(options)
      .then(function (response) {
        setData(response.data.bulk);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  useEffect(() => {
    res();
  }, []);
  return (
    <div className="main" id="main">
      <Home data={data} />
      <Cities data={data} />
      <News data={data} />
    </div>
  );
}

export default App;
