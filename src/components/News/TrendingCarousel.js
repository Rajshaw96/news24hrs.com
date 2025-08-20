"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { fetchTodayNews } from "@/lib/newsApi";

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

export default function TrendingCarousel({ dark }) {
  const [trendingData, setTrendingData] = useState([]);

  useEffect(() => {
    async function loadNews() {
      try {
        // Fetch trending/popular news - adjust category if needed
        const data = await fetchTodayNews("popular");
        setTrendingData(data || []);
      } catch (error) {
        console.error("Error fetching trending news:", error);
      }
    }
    loadNews();
  }, []);

  const settings = {
    slidesToShow: 2,
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
      { breakpoint: 1140, settings: { slidesToShow: 2 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { arrows: false, slidesToShow: 1 } },
      { breakpoint: 576, settings: { arrows: false, slidesToShow: 1 } },
    ],
  };

  return (
    <Slider {...settings} className="row trending-news-slider">
      {trendingData.map((item, i) => (
        <div className="col" key={i}>
          <div
            className={`trending-news-item ${
              dark ? "trending-news-item-dark" : ""
            }`}
          >
            <div className="trending-news-thumb">
              <img src={item.urlToImage || "/images/default-thumb.jpg"} alt="trending" />
              <div className="icon">
                <Link href={item.url || "#"}>
                  <i className="fas fa-bolt"></i>
                </Link>
              </div>
            </div>
            <div className="trending-news-content">
              <div className="post-meta">
                <div className="meta-categories">
                  <Link href={item.url || "#"}>{item.source?.name || "News"}</Link>
                </div>
                <div className="meta-date">
                  <span>{item.publishedAt || ""}</span>
                </div>
              </div>
              <h3 className="title">
                <Link href={item.url || "#"}>{item.title}</Link>
              </h3>
              <p className="text">{item.description || ""}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
