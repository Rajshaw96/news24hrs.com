"use client";

import React, { useEffect, useState } from "react";

export default function AdWidgetTwo() {
  const [topNews, setTopNews] = useState(null);
  const host = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    async function getTopNews() {
      try {
        const res = await fetch(`${host}/api/news`);
        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          setTopNews(data[0]); // Pick the first article
        } else {
          console.warn("Unexpected API response:", data);
        }
      } catch (err) {
        console.error("Error fetching top news:", err);
      }
    }

    getTopNews();
  }, [host]);

  if (!topNews) return null;

  return (
    <div className="sidebar-add pt-40">
      <a
        href={topNews._url || "#"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={topNews.urlToImage || topNews.image || "/images/ads/ad-2.jpg"}
          alt={topNews.title || "ad"}
          style={{ width: "780px", objectFit: "cover" }}
        />
      </a>
    </div>
  );
}
