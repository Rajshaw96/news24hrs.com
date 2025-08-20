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

export default function SportsNewsCarousel({ dark }) {
  const [sportsNews, setSportsNews] = useState([]);

  useEffect(() => {
    async function loadSportsNews() {
      try {
        const data = await fetchTodayNews("sports");
        setSportsNews(data.slice(0, 10)); // limit total items to avoid overcrowding
      } catch (error) {
        console.error("Error fetching sports news:", error);
      }
    }
    loadSportsNews();
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
    <Slider {...settings} className="trending-sidebar-slider">
      {/* Split into groups of 5 items per slide like original */}
      {Array.from({ length: Math.ceil(sportsNews.length / 5) }).map(
        (_, groupIndex) => (
          <div className="post_gallery_items" key={groupIndex}>
            {sportsNews
              .slice(groupIndex * 5, groupIndex * 5 + 5)
              .map((item, i) => (
                <div
                  key={item.id || i}
                  className={`gallery_item ${dark ? "gallery_item_dark" : ""}`}
                >
                  <div className="gallery_item_thumb">
                    <img
                      src={
                        item.urlToImage ||
                        `/images/sports/sports-${(i % 5) + 1}.jpg`
                      }
                      alt={item.title}
                      style={{
                        width: "100px",
                        height: "77px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="gallery_item_content">
                    <div className="post-meta">
                      <div className="meta-categories">
                        <Link href={`/news/${item.id}`}>
                          {item.category || "Sports"}
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
                      <Link href={`/news/${item.id}`}>
                        {item.title
                          ? item.title
                              .split(" ")
                              .slice(0, 8)
                              .join(" ") +
                            (item.title.split(" ").length > 8 ? "..." : "")
                          : ""}
                      </Link>
                    </h4>
                  </div>
                </div>
              ))}
          </div>
        )
      )}
    </Slider>
  );
}
