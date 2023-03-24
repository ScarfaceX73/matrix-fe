import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Home from './components/homePage';
import Cities from './components/cities';
import News from './components/news';

function App() {
  const [data, setData] = useState([])

  const options = {
    method: 'GET',
    url: String(process.env.REACT_APP_BACKEND_BULK),
    headers: {
      'content-type': 'application/json',
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
