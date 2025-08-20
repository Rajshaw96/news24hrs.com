import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { fetchTodayNews } from '@/lib/newsApi';

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

export default function MostviewNews({ dark }) {
  const [newsData, setNewsData] = useState([]);
  const [newsData2, setNewsData2] = useState([]);

  useEffect(() => {
    async function loadNews() {
      try {
        const data = await fetchTodayNews();
        setNewsData(data.slice(0,7) || []);
        setNewsData2(data.slice(7,14) || []);
        
        
      } catch (error) {
        console.error('Error fetching most viewed news:', error);
      }
    }
    loadNews();
  }, []);

  const setting = {
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
  // console.log("2ndMost View: ",newsData);
  
  return (
    <>
      <div className="trending-most-view mt-25">
        <div className={`section-title ${dark ? 'section-title-2' : ''}`}>
          <h3 className="title">Most View</h3>
        </div>
      </div>

      <Slider {...setting} className="trending-sidebar-slider">
        <div className="post_gallery_items">
          {newsData.map((item, i) => (
            <div
              className={`gallery_item gallery_item-style-2 ${dark ? 'gallery_item_dark' : ''}`}
              key={i}
            >
              <div className="gallery_item_thumb" style={{ width: '80px', height: '64px', overflow: 'hidden' }}>
                <img
                  src={item.urlToImage || '/images/placeholder.jpg'}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="icon">
                  <i className="fas fa-bolt"></i>
                </div>
              </div>
              <div className="gallery_item_content">
                <div className="post-meta">
                  <div className="meta-categories">
                    <Link href={`/category/${item.category || 'news'}`}>
                      {item.category || 'NEWS'}
                    </Link>
                  </div>
                  <div className="meta-date">
                    <span>{new Date(item.publishedAt).toLocaleDateString()}</span>
                  </div>
                </div>
                <h4 className="title">
                  <Link href={`/post/${item.article_id}`}>
                    {item.title}
                  </Link>
                </h4>
              </div>
            </div>
          ))}
        </div>
        <div className="post_gallery_items">
          {newsData2.map((item, i) => (
            <div
              className={`gallery_item gallery_item-style-2 ${dark ? 'gallery_item_dark' : ''}`}
              key={i}
            >
              <div className="gallery_item_thumb" style={{ width: '80px', height: '64px', overflow: 'hidden' }}>
                <img
                  src={item.urlToImage || '/images/placeholder.jpg'}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="icon">
                  <i className="fas fa-bolt"></i>
                </div>
              </div>
              <div className="gallery_item_content">
                <div className="post-meta">
                  <div className="meta-categories">
                    <Link href={`/category/${item.category || 'news'}`}>
                      {item.category || 'NEWS'}
                    </Link>
                  </div>
                  <div className="meta-date">
                    <span>{new Date(item.publishedAt).toLocaleDateString()}</span>
                  </div>
                </div>
                <h4 className="title">
                  <Link href={`/post/${item.article_id}`}>
                    {item.title}
                  </Link>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </Slider>
    </>
  );
}
