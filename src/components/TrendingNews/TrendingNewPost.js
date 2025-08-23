"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function TrendingNewPost({ dark }) {
  const [news, setNews] = useState([]);
  const host = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    async function loadNews() {
      try {
        const res = await fetch(`${host}/api/news`);
        const data = await res.json();

        // Defensive fallback like in FeatureNewsCarousel
        const articles = Array.isArray(data) ? data : data.articles || [];

        setNews(articles.slice(0, 6)); // only 6 posts for Trending
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }
    loadNews();
  }, [host]);

  // Split into two equal columns
  const firstHalf = news.slice(0, 3);
  const secondHalf = news.slice(3, 6);

  const renderPosts = (posts) =>
    posts.map((item, i) => (
      <div
        className={`gallery_item ${dark ? "gallery_item_dark" : ""}`}
        key={item._id || item.id || i}
      >
        <div
          className="gallery_item_thumb"
          style={{ width: "100px", height: "77px", overflow: "hidden" }}
        >
          <img
            src={item.urlToImage || item.image || "/images/placeholder.jpg"}
            alt={item.title}
            style={{ width: "100px", height: "77px", objectFit: "cover" }}
          />
          <div className="icon">
            <i className="fas fa-bolt"></i>
          </div>
        </div>
        <div className="gallery_item_content">
          <div className="post-meta">
            <div className="meta-categories">
              <Link href={`/news/${item._id || item.id}`}>
                {item.source?.name || "News"}
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
            <Link
              href={`/news/${item._id || item.id || "#"}`}
              target="_blank"
            >
              {item.title}
            </Link>
          </h4>
        </div>
      </div>
    ));

  return (
    <div className="row">
      <div className="col-lg-6 col-md-6">
        <div
          className={`trending-news-post-items ${
            dark ? "trending-news-post-items-dark" : ""
          }`}
        >
          {renderPosts(firstHalf)}
        </div>
      </div>
      <div className="col-lg-6 col-md-6">
        <div
          className={`trending-news-post-items ${
            dark ? "trending-news-post-items-dark" : ""
          }`}
        >
          {renderPosts(secondHalf)}
        </div>
      </div>
    </div>
  );
}
