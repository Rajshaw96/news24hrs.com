"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import ModalVideo from "react-modal-video";

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

export default function TwoPostCarousel({ dark, customClass }) {
  const [isOpen, setOpen] = useState(false);
  const [popularNews, setPopularNews] = useState([]);
  const host = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    async function loadPopularNews() {
      try {
        const res = await fetch(`${host}/api/news?category=world`);
        const data = await res.json();

        // Defensive fallback
        

        setPopularNews(data); // Limit to first 6
      } catch (error) {
        console.error("Error fetching popular news:", error);
      }
    }
    loadPopularNews();
  }, [host]);

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
    <section
      className={`single-play-post-area mt-10 ${customClass} ${
        dark ? "single-play-post-dark-area" : ""
      } `}
    >
      <div className="container custom-container">
        <div className="single-play-box">
          <Slider {...settings} className="row single-play-post-slider">
            {popularNews.map((item, i) => (
              <div className="col" key={item._id || item.id || i}>
                <div className="single-play-post-item">
                  <img
                    src={item.urlToImage || item.image || "/images/placeholder.jpg"}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />

                  <div className="single-play-post-content">
                    <div className="post-meta">
                      <div className="meta-categories">
                        <Link href={`/news/${item._id || item.id}`}>
                          {item.source?.name || "Popular"}
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
                      <Link href={`/news/${item._id || item.id || "#"}`} target="_blank">
                        {item.title}
                      </Link>
                    </h3>
                  </div>

                  <div className="play-btn">
                    <a
                      className="video-popup"
                      onClick={() => setOpen(true)}
                      href="#"
                    >
                      <i className="fas fa-play"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="eEzD-Y97ges"
            onClose={() => setOpen(false)}
          />
        </div>
      </div>
    </section>
  );
}
