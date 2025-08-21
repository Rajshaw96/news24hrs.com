"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
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

export default function FeatureNewsCarousel({ customClass, dark }) {
  const [featureNews, setFeatureNews] = useState([]);
  const host = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    async function loadFeatureNews() {
      try {
        const res = await fetch(`${host}/api/news`);
        const data = await res.json();

        // Defensive fallback in case API response differs
        const articles = Array.isArray(data) ? data : data.articles || [];

        setFeatureNews(articles.slice(0, 8)); // limit to 8
      } catch (error) {
        console.error("Error fetching feature news:", error);
      }
    }
    loadFeatureNews();
  }, [host]);

  const settings = {
    slidesToShow: 4,
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
      { breakpoint: 1140, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { arrows: false, slidesToShow: 2 } },
      { breakpoint: 576, settings: { arrows: false, slidesToShow: 1 } },
    ],
  };

  return (
    <section className={`feature-area ${customClass}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={`section-title ${dark ? "section-title-2" : ""}`}>
              <h3 className="title">Feature News</h3>
            </div>
          </div>
        </div>
        <Slider className="row feature-post-slider" {...settings}>
          {featureNews.map((item, i) => (
            <div className="col" key={item._id || item.id || i}>
              <div className="feature-post">
                <div className="feature-post-thumb">
                  <img
                    src={item.urlToImage || item.image || "/images/placeholder.jpg"}
                    className="img-fluid"
                    alt={item.title}
                    style={{ width: "100%", height: "200px", objectFit: "cover" }}
                  />
                </div>
                <div className="feature-post-content">
                  <div className="post-meta">
                    <div className="meta-categories">
                      <Link href={item.source?.url || "#"} target="_blank">
                        {item.source?.name || "News"}
                      </Link>
                    </div>
                    <div className="meta-date">
                      <span>
                        {item.publishedAt
                          ? new Date(item.publishedAt).toLocaleDateString()
                          : ""}
                      </span>
                    </div>
                  </div>
                  <h4 className="title">
                    <Link href={item.url || `/news/${item._id || item.id || "#"}`} target="_blank">
                      {item.title}
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
