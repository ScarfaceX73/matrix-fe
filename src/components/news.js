import React from "react";
import "./news.css";
import thunder from "../img/thunder.png";
import sun from "../img/sun.png";
import cloud from "../img/cloud.png";

const imgArray = [thunder, sun, cloud];

const News = ({ data, newsInView }) => {
  const NewsCard = (props) => {
    const { item, delay, img } = props;

    return (
      <div
        className={`button_hover_card`}
        key={item.query.custom_id}
        style={{
          opacity: 0,
          animationDelay: delay,
          animationName: "slidein",
          animationDuration: "1s",
          animationFillMode: "forwards",
          backgroundImage: `url(${img})`,
        }}
      >
        <p className="paragraph_hover">
          <span style={{}}>
            {item?.query?.current?.condition?.text} weather in{" "}
            {item?.query?.location?.name}
          </span>
        </p>
        <button className="view_more_btn">Read more</button>
      </div>
    );
  };

  return (
    <div id="news">
      <div className="news-info">
        <div>
          <h1>News</h1>
          {newsInView ? (
            <div className="news-cards">
              {data.map((item, idx) => (
                <NewsCard
                  item={item}
                  key={idx}
                  delay={`${idx / 5}s`}
                  img={imgArray[idx]}
                />
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="footer">
        <div className="header-ft">
          <h1>weatherapp</h1>
        </div>
        <div className="list-items">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#cities">Cities</a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default News;
