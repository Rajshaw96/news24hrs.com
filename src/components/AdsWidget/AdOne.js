"use client";
import React, { useEffect, useState } from "react";

export default function AdOne() {
  const [popularNews, setPopularNews] = useState(null);
  const host = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    async function loadPopularNews() {
      try {
        // Fetch news sorted by popularity
        const res = await fetch(`${host}/api/news?category=world`);
        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          setPopularNews(data[data.length - 1]); // Take the top article
        } else {
          setPopularNews(null);
        }
      } catch (error) {
        console.error("Error fetching popular news:", error);
        setPopularNews(null);
      }
    }
    loadPopularNews();
  }, [host]);

  if (!popularNews) {
    return (
      <div className="sidebar-add pt-35">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="sidebar-add pt-35">
      <a
        href={`/news/${popularNews._id || popularNews.id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={popularNews.urlToImage || popularNews.image || "/images/ads/ad-2.jpg"}
          alt={popularNews.title || "Popular news"}
          style={{ width: "780px", height: "624px", objectFit: "cover" }}
        />
      </a>
    </div>
  );
}
