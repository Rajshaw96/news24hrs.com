"use client";
import React, { useEffect, useState } from "react";

export default function TrendingNewsWidget() {
  const [news, setNews] = useState([]);
  const host = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    async function getTrendingNews() {
      try {
        const res = await fetch(`${host}/api/news?category=world`);
        const data = await res.json();

        if (!Array.isArray(data)) {
          console.warn("Unexpected API response:", data);
          setNews([]);
          return;
        }

        setNews(data.slice(0, 7)); // limit to 7 items
      } catch (error) {
        console.error("Error fetching trending news:", error);
      }
    }

    getTrendingNews();
  }, [host]);

  return (
    <div className="trending-news-post-items">
      {news.map((item, index) => (
        <div className="gallery_item" key={item._id || item.id || index}>
          <div className="gallery_item_thumb">
            <img
              src={item.urlToImage || item.image || "/images/gallery-1.jpg"}
              alt={item.title || "gallery"}
              style={{ width: "100px", height: "70px", objectFit: "cover" }}
            />
            <div className="icon">
              <i className="fas fa-bolt"></i>
            </div>
          </div>
          <div className="gallery_item_content">
            <div className="post-meta">
              <div className="meta-categories">
                <a href={`/news/${item._id || item.id}`}>
                  {item.source?.name || item.category || "Trending"}
                </a>
              </div>
              <div className="meta-date">
                <span>
                  {item.publishedAt
                    ? new Date(item.publishedAt).toDateString()
                    : ""}
                </span>
              </div>
            </div>
            <h4 className="title">
              <a
                href={`/news/${item._id || item.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.title?.split(" ").slice(0, 8).join(" ")}
                {item.title?.split(" ").length > 8 ? "..." : ""}
              </a>
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}
