"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
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

export default function PopularNewsCarousel({ dark }) {
  const [popularNews, setPopularNews] = useState([]);

  useEffect(() => {
    async function loadPopularNews() {
      try {
        const data = await fetchTodayNews("popular");
        setPopularNews(data);
      } catch (error) {
        console.error("Error fetching popular news:", error);
      }
    }
    loadPopularNews();
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
      { breakpoint: 768, settings: { arrows: false, slidesToShow: 1 } },
      { breakpoint: 576, settings: { arrows: false, slidesToShow: 1 } },
    ],
  };

  return (
    <div className="populer-post">
      <div className={`section-title ${dark ? "section-title-2" : ""}`}>
        <h3 className="title">Popular</h3>
      </div>

      <Slider {...settings} className="trending-sidebar-slider">
        {popularNews.length > 0 &&
          // Group items in sets of 5 like your original
          Array.from({ length: Math.ceil(popularNews.length / 5) }).map(
            (_, groupIndex) => (
              <div className="populer-post-slider" key={groupIndex}>
                {popularNews
                  .slice(groupIndex * 5, groupIndex * 5 + 5)
                  .map((item, i) => (
                    <div
                      key={item.id || i}
                      className={`gallery_item populer_item-style ${
                        dark ? "gallery_item_dark" : ""
                      }`}
                    >
                      <div className="gallery_item_thumb">
                        <img
                          src={
                            item.urlToImage ||
                            "/images/populer/populer-post-3.jpg"
                          }
                          alt={item.title}
                          style={{ width: "100px", height: "57px" }}
                        />
                        <span>{item.id}</span>
                      </div>
                      <div className="gallery_item_content">
                        <h4 className="title">
                          <Link href={`/news/${item.id}`}>
                            {item.title
                              ? item.title.split(" ").slice(0, 8).join(" ") +
                                (item.title.split(" ").length > 8 ? "..." : "")
                              : ""}
                          </Link>
                        </h4>

                        <span>{item.category || "General"}</span>
                      </div>
                    </div>
                  ))}
              </div>
            )
          )}
      </Slider>
    </div>
  );
}
