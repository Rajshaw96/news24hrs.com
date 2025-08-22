"use client";
import Link from "next/link";
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

export default function MostShare({ customClass, dark }) {
  const [firstNewsGroup, setFirstNewsGroup] = useState([]);
  const [secondNewsGroup, setSecondNewsGroup] = useState([]);
  const host = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    async function loadMostShared() {
      try {
        const res1 = await fetch(`${host}/api/news?category=business`);
        const res2 = await fetch(`${host}/api/news?category=technology`);

        const data1 = await res1.json();
        const data2 = await res2.json();

        setFirstNewsGroup(Array.isArray(data1) ? data1.slice(0, 4) : []);
        setSecondNewsGroup(Array.isArray(data2) ? data2.slice(0, 4) : []);
      } catch (error) {
        console.error("Error fetching most shared news:", error);
      }
    }
    loadMostShared();
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
      { breakpoint: 768, settings: { arrows: false, slidesToShow: 1 } },
      { breakpoint: 576, settings: { arrows: false, slidesToShow: 1 } },
    ],
  };

  const renderNewsGroup = (newsArray, startCount) => (
    <div className="most-share-post-items">
      {newsArray.map((item, i) => (
        <div
          className={`most-share-post-item ${
            dark ? "most-share-post-item-dark" : ""
          }`}
          key={item._id || item.id || i}
        >
          <div className="post-meta">
            <div className="meta-categories">
              <Link href={item.url || `/news/${item._id || item.id}`}>
                {item.category || "Business"}
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
          <h3 className="title">
            <Link href={`/news/${item._id || item.id}`}>
              {item.title
                ? item.title.split(" ").slice(0, 10).join(" ") +
                  (item.title.split(" ").length > 10 ? "..." : "")
                : ""}
            </Link>
          </h3>
          <ul>
            <li>
              <i className="fab fa-twitter"></i> 2.2K
            </li>
            <li>
              <i className="fab fa-facebook-f"></i> 3.5K
            </li>
          </ul>
          <div className="count">
            <span>{startCount + i + 1}</span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className={`all-post-sidebar ${customClass}`}>
      <div className="most-share-post">
        <div className={`section-title ${dark ? "section-title-2" : ""}`}>
          <h3 className="title">Most Share</h3>
        </div>
      </div>

      <Slider {...settings} className="trending-sidebar-slider">
        {renderNewsGroup(firstNewsGroup, 0)}
        {renderNewsGroup(secondNewsGroup, 4)}
      </Slider>
    </div>
  );
}
