import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Home from "./components/homePage";
import Cities from "./components/cities";
import News from "./components/news";
import { useInView } from "react-intersection-observer";

function App() {
  const [data, setData] = useState([]);
  const { ref: homeRef, inView: homeInView } = useInView({
    threshold: 0.5,
    trackVisibility: true,
    delay: 200,
  });

  const { ref: cityRef, inView: cityInView } = useInView({
    threshold: 0.25,
    trackVisibility: true,
    delay: 200,
  });

  const { ref: newsRef, inView: newsInView } = useInView({
    threshold: 0.45,
    trackVisibility: true,
    delay: 200,
  });

  const options = {
    method: "GET",
    url: String(process.env.REACT_APP_BACKEND_BULK),
    headers: {
      "content-type": "application/json",
    },
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
  };

  useEffect(() => {
    res();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const radius = homeInView ? "0px" : "10px";

  const styles = {
    transition: "filter 1s",
    "-webkit-filter": "blur(" + radius + ")",
    filter: "blur(" + radius + ")",
  };

  return (
    <div className="main" id="main">
      <div ref={homeRef} style={{ ...styles }}>
        <Home data={data} />
      </div>
      <div ref={cityRef}>
        <Cities data={data} cityInView={cityInView} />
      </div>
      <div ref={newsRef}>
        <News data={data} newsInView={newsInView} />
      </div>
    </div>
  );
}

export default App;
