"use client";
import React, { useEffect, useState } from "react";
import { fetchTodayNews } from "@/lib/newsApi";

export default function AdOne() {
  const [popularNews, setPopularNews] = useState(null);

  useEffect(() => {
    async function loadPopularNews() {
      try {
        // Fetch news sorted by popularity (adjust API call as needed)
        const data = await fetchTodayNews("popular");
        if (data.length > 0) {
          setPopularNews(data[0]); // Take the top article
        }
      } catch (error) {
        console.error("Error fetching popular news:", error);
      }
    }
    loadPopularNews();
  }, []);

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
        href={popularNews.url || "#"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={popularNews.urlToImage || "/images/ads/ad-2.jpg"}
          alt={popularNews.title || "Popular news"}
          style={{ width: "780px", height: "624px", objectFit: "cover" }}
        />
      </a>
    </div>
  );
}
