import React from 'react';
import Slider from 'react-slick';

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
              <span>Trending</span>
              <Slider {...settings} className="trending-slider">
                <div className="trending-item">
                  <p>
                    Top 10 Best Movies of 2018 So Far: Great Movies To Watch Now{' '}
                  </p>
                </div>
                <div className="trending-item">
                  <p>
                    Top 10 Best Movies of 2018 So Far: Great Movies To Watch Now{' '}
                  </p>
                </div>
                <div className="trending-item">
                  <p>
                    Top 10 Best Movies of 2018 So Far: Great Movies To Watch Now{' '}
                  </p>
                </div>
              </Slider>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="topbar-social d-flex align-items-center">
              <p>Thursday, March 26, 2020</p>
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
