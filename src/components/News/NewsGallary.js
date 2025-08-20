"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import ModalVideo from "react-modal-video";
import Link from "next/link";
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

export default function NewsGallary({ customClass, dark }) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const [galleryData, setGalleryData] = useState([]);

  // Fetch news on mount
  useEffect(() => {
    async function loadNews() {
      try {
        const data = await fetchTodayNews("general"); // category can be dynamic
        setGalleryData(data || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }
    loadNews();
  }, []);

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
  };

  const settingsInner = {
    slidesToShow: 7,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    centerPadding: "0",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <Slider
        {...settings}
        asNavFor={nav2}
        ref={(slider1) => setNav1(slider1)}
        className="post_gallery_slider"
      >
        {galleryData.map((item, i) => (
          <div
            className={`post_gallery_play d-flex ${
              dark ? "post_gallery_play_dark" : ""
            }`}
            key={i}
          >
            <div
              className="bg-image"
              style={{
                backgroundImage: `url(${item.urlToImage || "/images/default.jpg"})`,
              }}
            ></div>
            <div className="post__gallery_play_content">
              <div className="post-meta">
                <div className="meta-categories">
                  <a href="#">{item.source.name || "News"}</a>
                </div>
                <div className="meta-date">
                  <span>{item.publishedAt || ""}</span>
                </div>
              </div>
              <h2 className="title">
                <Link href={item.url || "/"}>{item.title}</Link>
              </h2>
              <p>{item.description || ""}</p>
            </div>
            <div className="post_play_btn" onClick={() => setOpen(true)}>
              <a className="#" onClick={(e) => e.preventDefault()} href="/">
                <i className="fas fa-play"></i>
              </a>
            </div>
          </div>
        ))}
      </Slider>

      <Slider
        {...settingsInner}
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        className="post_gallery_inner_slider"
      >
        {galleryData.map((item, i) => (
          <div className="item" key={i}>
            <img src={item.urlToImage || "/images/default-thumb.jpg"} alt="" />
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
    </>
  );
}
