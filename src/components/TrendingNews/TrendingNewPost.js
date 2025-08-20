import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { fetchTodayNews } from "@/lib/newsApi";
export default function TrendingNewPost({ dark }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      try {
        const data = await fetchTodayNews('general'); // fetch 6 posts
        // console.log("TrendingNewsPost :",data);
        
        setNews(data || []);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    }
    loadNews();
  }, []);

  // Split into two equal columns
  const firstHalf = news.slice(0, 3);
  // console.log("First Half :",firstHalf);
  
  const secondHalf = news.slice(3, 6);
  // console.log("First Half :",secondHalf);

  const renderPosts = (posts) =>
    posts.map((item, i) => (
      <div
        className={`gallery_item ${dark ? 'gallery_item_dark' : ''}`}
        key={i}
      >
        <div className="gallery_item_thumb" style={{ width: '100px', height: '77px', overflow: 'hidden' }}>
          <img
            src={item.urlToImage || '/images/placeholder.jpg'}
            alt={item.title}
            style={{ width: '100px', height: '77px', objectFit: 'cover' }}
          />
          <div className="icon">
            <i className="fas fa-bolt"></i>
          </div>
        </div>
        <div className="gallery_item_content">
          <div className="post-meta">
            <div className="meta-categories">
              <Link href={item.url || '/'}>{item.source?.name || 'NEWS'}</Link>
            </div>
            <div className="meta-date">
              <span>{new Date(item.publishedAt).toLocaleDateString()}</span>
            </div>
          </div>
          <h4 className="title">
            <Link href={item.url || '/'}>{item.title}</Link>
          </h4>
        </div>
      </div>
    ));

  return (
    <div className="row">
      <div className="col-lg-6 col-md-6">
        <div className={`trending-news-post-items ${dark ? 'trending-news-post-items-dark' : ''}`}>
          {renderPosts(firstHalf)}
        </div>
      </div>
      <div className="col-lg-6 col-md-6">
        <div className={`trending-news-post-items ${dark ? 'trending-news-post-items-dark' : ''}`}>
          {renderPosts(secondHalf)}
        </div>
      </div>
    </div>
  );
}
