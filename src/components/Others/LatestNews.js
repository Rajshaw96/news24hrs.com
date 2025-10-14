"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function LatestNews() {
  const [latestNews, setLatestNews] = useState([]);
  const host = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`${host}/api/news/`);
        const data = await res.json();
        // Assuming the API returns an array of news, we take the first 3
        setLatestNews(data.slice(0, 3));
      } catch (error) {
        console.error("Failed to fetch latest news:", error);
      }
    };

    fetchNews();
  }, [host]);

  return (
    <section className="latest-news-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h3 className="title">Our latest news</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {latestNews.map((item, index) => (
            <div className="col-lg-4" key={item._id || index}>
              <div className="trending-news-item mb-30">
                <div className="trending-news-thumb">
                  <img
                    src={item.image || `/images/latest-news-${index + 1}.png`}
                    alt={item.title}
                    style={{ width: '350px', height: '250px', objectFit: 'cover' }}
                  />
                </div>
                <div className="trending-news-content">
                  <div className="post-meta">
                    <div className="meta-categories" style={{textTransform: "capitalize"}}>
                      <Link href={`/category/${item.category?.toLowerCase() || 'general'}`}>
                        {item.category || 'NEWS'}
                      </Link>
                    </div>
                    <div className="meta-date">
                      <span>
                        {item.publishedAt
                          ? new Date(item.publishedAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })
                          : ''}
                      </span>
                    </div>
                  </div>
                  <h3 className="title">
                    <Link href={`/news/${item._id}`}>
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text">
                    {item.description
                      ? item.description.slice(0, 150) + (item.description.length > 150 ? '...' : '')
                      : ''}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
