import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function WideAdWidget() {
  const host = process.env.NEXT_PUBLIC_API_URL;
  const [adNews, setAdNews] = useState(null); // Use null as initial state for a single item

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`${host}/api/news/`);
        const data = await res.json();
        // Check if data is an array and has items
        if (data && data.length > 0) {
          // Store only the first news item as an object
          setAdNews(data[0]);
        }
      } catch (error) {
        console.error("Failed to fetch news for ad:", error);
      }
    };

    fetchNews();
  }, [host]);

  // Render a placeholder or nothing while loading
  if (!adNews) {
    return (
      <div className="add-area text-center" style={{ height: '170px', backgroundColor: '#f0f0f0' }}>
        {/* You can add a loading spinner here */}
      </div>
    );
  }

  return (
    <div className="add-area text-center">
      <Link href={`/news/${adNews._id}`}>
        <img
          // Use a fallback for the image source property
          src={adNews.urlToImage || adNews.image}
          alt={adNews.title || "Advertisement"}
          style={{ width: "1340px", height: "170px", objectFit: "cover" }}
        />
      </Link>
    </div>
  );
}
