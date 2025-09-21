import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';

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

export default function Topbar() {
  const [currentDate, setCurrentDate] = useState('');
  const [trendingNews, setTrendingNews] = useState([]);

  useEffect(() => {
    const date = new Date();
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    setCurrentDate(date.toLocaleDateString('en-US', options));
  }, []);

  useEffect(() => {
    const fetchTrendingNews = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/news?category=trendy&limit=5`
        );
        const data = await res.json();
        setTrendingNews(Array.isArray(data) ? data : data.articles || []);
      } catch (error) {
        console.error('Failed to fetch trending news:', error);
      }
    };
    fetchTrendingNews();
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
    speed: 500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="header-topbar">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="topbar-trending">
              <span className="trending-badge">Trending</span>
              {trendingNews.length > 0 && (
                <Slider {...settings} className="trending-slider">
                  {trendingNews.map((item) => (
                    <div className="trending-item" key={item._id}>
                      <p>
                        <Link href={`/news/${item._id}`}>{item.title}</Link>
                      </p>
                    </div>
                  ))}
                </Slider>
              )}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="topbar-social d-flex align-items-center">
              <p>{currentDate}</p>
              <div className="social">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
