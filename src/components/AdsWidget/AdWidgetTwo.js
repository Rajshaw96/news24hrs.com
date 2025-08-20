"use client";

import React, { useEffect, useState } from "react";
import { fetchTodayNews } from "@/lib/newsApi"; // Adjust path as needed

export default function AdWidgetTwo() {
  const [topNews, setTopNews] = useState(null);

  useEffect(() => {
    async function getTopNews() {
      try {
        const data = await fetchTodayNews("general"); // You can change category if needed
        console.log("Data: ", data);
        
        if (data.length > 0) {
          setTopNews(data[0]); // Get the top (most popular) article
        }
      } catch (err) {
        console.error("Error fetching top news:", err);
      }
    }

    getTopNews();
  }, []);

  if (!topNews) return null;

  return (
    <div className="sidebar-add pt-40">
      <a href={topNews.url} target="_blank" rel="noopener noreferrer">
        <img
          src={topNews.urlToImage || "/images/ads/ad-2.jpg"}
          alt="ad"
          style={{ width: "780px" }}
        />
      </a>
    </div>
  );
}
