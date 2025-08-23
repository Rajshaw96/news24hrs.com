"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

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
  const host = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    async function getTrendingNews() {
      try {
        const res = await fetch(`${host}/api/news?category=business`);
        const data = await res.json();

        if (!Array.isArray(data)) {
          console.warn("Unexpected API response:", data);
          setNews([]);
          return;
        }

        setNews(data.slice(0, 6)); // show top 6 trending
      } catch (error) {
        console.error("Error fetching trending news:", error);
      }
    }

    getTrendingNews();
  }, [host]);

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
        {news.map((item, i) => (
          <div className="trending-news-item" key={item._id || item.id || i}>
            <div className="trending-news-thumb">
              <img
                src={
                  item.urlToImage ||
                  item.image ||
                  `/images/trending-news-${i + 1}.jpg`
                }
                alt={item.title || "Trending news"}
                style={{ width: "700px", height: "200px", objectFit: "cover" }}
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
                  <a href={`/news/${item._id || item.id}`}>
                    {item.category || "Trending"}
                  </a>
                </div>
                <div className="meta-date">
                  <span>
                    {item.publishedAt
                      ? new Date(item.publishedAt).toDateString()
                      : ""}
                  </span>
                </div>
              </div>
              <h3 className="title">
                <a
                  href={`/news/${item._id || item.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
