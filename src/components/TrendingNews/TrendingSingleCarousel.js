"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { fetchTodayNews } from "@/lib/newsApi"; // Adjust the path if needed

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <span className="prev slick-arrow" onClick={onClick}>
      <i className="fal fa-angle-left"></i>
    </span>
  );
}
function NextArrow(props) {
  const { onClick } = props;
  return (
    <span className="next slick-arrow" onClick={onClick}>
      <i className="fal fa-angle-right"></i>
    </span>
  );
}

export default function TrendingSingleCarousel() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function getTrendingNews() {
      try {
        const data = await fetchTodayNews("trending"); // Directly call the function
        setNews(data);
      } catch (error) {
        console.error("Error fetching trending news:", error);
      }
    }

    getTrendingNews();
  }, []);

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    speed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="trending-sidebar mt-40">
      <div className="section-title">
        <h3 className="title">Trending News</h3>
      </div>
      <Slider className="trending-sidebar-slider" {...settings}>
        {news.map((item, index) => (
          <div className="trending-news-item" key={index}>
            <div className="trending-news-thumb">
              <img
                src={item.urlToImage || "/images/trending-news-1.jpg"}
                alt="trending"
                style={{ width: "700px", height: "200px" }}
              />
              <div className="icon">
                <a href="#">
                  <i className="fas fa-bolt"></i>
                </a>
              </div>
            </div>
            <div className="trending-news-content">
              <div className="post-meta">
                <div className="meta-categories">
                  <a href="#">{item.source.name}</a>
                </div>
                <div className="meta-date">
                  <span>{new Date(item.publishedAt).toDateString()}</span>
                </div>
              </div>
              <h3 className="title">
                <a href={item.url} target="_blank">
                  {item.title?.split(" ").slice(0, 8).join(" ")}
                  {item.title?.split(" ").length > 8 ? "..." : ""}
                </a>
              </h3>
              <p className="text">
                {item.description
                  ? item.description.split(" ").slice(0, 12).join(" ") +
                    (item.description.split(" ").length > 12 ? "..." : "")
                  : "No description available."}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
